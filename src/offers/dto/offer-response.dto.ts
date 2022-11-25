import {
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { OffersDto } from './offers.dto';

export class ResponseDto {
  @IsOptional()
  @IsString()
  currency_name?: string;

  @IsOptional()
  @IsNumber()
  offers_count?: number;

  @IsOptional()
  @ValidateNested()
  offers: OffersDto[];

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @ValidateNested()
  data?: OffersDto;
}
