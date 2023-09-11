import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetCampaignFilterDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  search?: string;
}
