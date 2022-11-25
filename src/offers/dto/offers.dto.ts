import {
  IsString,
  IsInt,
  Max,
  Min,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OffersDto {
  @Type(() => String)
  @IsString()
  externalOfferId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  requirements: string;

  @IsNotEmpty()
  @IsString()
  offerUrlTemplate: string;

  @IsOptional()
  @IsString()
  thumbnail: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(25)
  isDesktop: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(25)
  isAndroid: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(25)
  isIos: number;

  @IsNotEmpty()
  @IsString()
  providerName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  icon: string;
}
