import { BadRequestException, Injectable } from '@nestjs/common';
import { PaymentSessionDto } from './dto/payment-session.dto';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentsService {
    private readonly stripe: Stripe;

    constructor(private readonly configService: ConfigService) {
          this.stripe = new Stripe(
          this.configService.getOrThrow<string>('STRIPE_SECRET')
  );
    }
    
async createPaymentSession(paymentSessionDto: PaymentSessionDto) {

  const session = await this.stripe.checkout.sessions.create({
    mode: 'payment',

    line_items: paymentSessionDto.items.map((item) => ({
      price_data: {
        currency: paymentSessionDto.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    metadata: {
    orderId: paymentSessionDto.orderId,
    },

    payment_intent_data: {
  metadata: {
    orderId: paymentSessionDto.orderId,
  },
},
success_url:
  this.configService.getOrThrow<string>('STRIPE_SUCCESS_URL'),

cancel_url:
  this.configService.getOrThrow<string>('STRIPE_CANCEL_URL'),
  });
  return {
    id: session.id,
    url: session.url,
  }
};
  
  handleWebhook(rawBody: Buffer, signature: string) {
    const webhookSecret =
    this.configService.getOrThrow<string>('STRIPE_ENDPOINT_SECRET');

    let event: Stripe.Event;

    try {
  event = this.stripe.webhooks.constructEvent(
    rawBody,
    signature,
    webhookSecret,
  );
} catch {
  throw new BadRequestException('Firma de webhook inválida');
}

if (event.type === 'charge.succeeded') {
    const charge = event.data.object as Stripe.Charge;
    const orderId = charge.metadata.orderId;

    console.log('Pago confirmado. orderId:', orderId);
}
    else {
  console.log('Evento no manejado:', event.type);
}

    return { received: true };
}

}
