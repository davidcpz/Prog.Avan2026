import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  Req,
  HttpCode,
} from '@nestjs/common';

import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';

import { PaymentSessionDto } from './dto/payment-session.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
    
    constructor(private readonly paymentsService: PaymentsService) {}
    
    @Post('create-payment-session')
    createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
        return this.paymentsService.createPaymentSession(paymentSessionDto);

    }
    @Get('success')
paymentSuccess() {
  return {
    ok: true,
    message: 'Payment successful',
  };
}
    @Get('cancel')
paymentCancel() {
  return {
    ok: false,
    message: 'Payment cancelled',
  };
}
@Post('webhook')
@HttpCode(200)
handleWebhook(
         @Req() request: RawBodyRequest<Request>,
         @Headers('stripe-signature') signature: string,
) {
    return this.paymentsService.handleWebhook(
  request.rawBody!,
  signature,
);

}
};













