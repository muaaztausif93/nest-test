import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, ValidateIf } from 'class-validator';

export class AddOfferDto {
  @IsOptional()
  @ValidateIf((o) => o.query)
  query?: any;

  @IsOptional()
  @Type(() => AddOfferDto)
  @ValidateIf((o) => o.response)
  @ValidateNested()
  response?: {
    offers: any[];
  };

  @IsOptional()
  @Type(() => AddOfferDto)
  @ValidateIf((o) => o.status == 'success')
  @ValidateNested()
  data?: any;
}
