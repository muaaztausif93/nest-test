import { Module } from '@nestjs/common';
import { EnvHelper } from '../common/helpers/env.helper';
import { Offer } from './offers.entity';
import { OfferService } from './offer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferController } from './offers.controller';
import { OfferRepository } from './offer.repository';

EnvHelper.verifyNodeEnv();

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [OfferService, OfferRepository],
  controllers: [OfferController],
  exports: [OfferService],
})
export class OfferModule {}
