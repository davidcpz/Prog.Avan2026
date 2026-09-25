import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import * as Joi from 'joi';

@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
  PORT: Joi.number().required(),
 STRIPE_SECRET: Joi.string().required(),
  STRIPE_ENDPOINT_SECRET: Joi.string().required(),
  STRIPE_SUCCESS_URL: Joi.string().required(),
  STRIPE_CANCEL_URL: Joi.string().required(),
}),




  }),
  PaymentsModule,
],
 controllers: [AppController],
 providers: [AppService],

})
export class AppModule {}
