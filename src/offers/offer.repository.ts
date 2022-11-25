import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Offer } from './offers.entity';

@Injectable()
export class OfferRepository extends Repository<Offer> {
  constructor(private readonly dataSource: DataSource) {
    super(Offer, dataSource.manager);
  }
}
