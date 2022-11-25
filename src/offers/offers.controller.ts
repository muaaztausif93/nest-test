import { Controller, Post, Body } from '@nestjs/common';
import { OfferService } from './offer.service';
// import { payload } from '../common/files/offer1.payload';
import { payload } from '../common/mockData/offer2.payload';
import { AddOfferDto } from './dto/add-offers.dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {
    this.addtOffers(payload);
  }

  @Post()
  async addtOffers(@Body() addOffersDto: AddOfferDto) {
    const data = await this.offerService.getData(addOffersDto);

    return await this.offerService.addOffer({
      offers: data,
    });
  }
}
