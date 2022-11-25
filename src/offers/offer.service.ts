import { Injectable } from '@nestjs/common';
import { OfferRepository } from './offer.repository';
import { ResponseDto } from './dto/offer-response.dto';
import { AddOfferDto } from './dto/add-offers.dto';
import { isArray } from 'lodash';
import { Offer } from './offers.entity';

@Injectable()
export class OfferService {
  constructor(private readonly offerRepository: OfferRepository) {}

  async addOffer({ offers }: ResponseDto): Promise<Offer[]> {
    return this.offerRepository.save(offers);
  }

  async getData(data: AddOfferDto) {
    let extractedData = [];
    const { response, data: dataToBeFormated } = data;
    const { offers } = response || {};

    if (offers && isArray(offers)) {
      extractedData = offers.map((offer: any) => {
        let platforms = '';
        const {
          offer_id,
          offer_name,
          offer_desc,
          call_to_action,
          offer_url,
          image_url,
          platform,
          device,
        } = offer;

        if (platform !== 'mobile') {
          platforms = 'desktop';
        } else {
          const result = device.match(`/iphone/`);
          platforms = result !== '' ? 'iphone' : 'android';
        }

        return {
          externalOfferId: offer_id,
          name: offer_name,
          description: offer_desc,
          requirements: call_to_action,
          offerUrlTemplate: offer_url,
          thumbnail: image_url,
          isDesktop: platforms === 'desktop' ? 1 : 0,
          isAndroid: platforms == 'android' ? 1 : 0,
          isIos: platforms == 'iphone' ? 1 : 0,
          providerName: 'offer1',
        };
      });
      return extractedData;
    }
    const arrayOfKeys = Object.keys(dataToBeFormated);
    extractedData = arrayOfKeys.map((key) => {
      const { Offer, OS } = dataToBeFormated[key];
      const {
        campaign_id,
        name,
        icon,
        tracking_url,
        instructions,
        description,
      } = Offer;
      const { android, ios, web } = OS;
      return {
        externalOfferId: campaign_id,
        name,
        description,
        requirements: instructions,
        offerUrlTemplate: tracking_url,
        isDesktop: web ? 1 : 0,
        isAndroid: android ? 1 : 0,
        isIos: ios ? 1 : 0,
        providerName: 'offer2',
        icon,
      };
    });

    return extractedData;
  }
}
