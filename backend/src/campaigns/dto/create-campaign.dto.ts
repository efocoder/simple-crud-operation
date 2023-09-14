import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateCampaignDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  groupId: string;
}

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}

export class PageDTO {
  @ApiProperty({ default: 1, required: false })
  page: number;
}

export class LimitDTO {
  @ApiProperty({ default: 10, required: false })
  limit: number;
}
