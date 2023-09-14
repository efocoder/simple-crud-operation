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
  name: string;
}
