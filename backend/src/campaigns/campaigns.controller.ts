import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserGuard } from 'src/users/user.guard';
import { User } from 'src/users/entities/user.entity';
import { GetUser } from 'src/users/get_user.decorator';
import { CreateResponseType, createResponse } from 'util/shared';

@ApiTags('Campaigns')
@UseGuards(UserGuard)
@ApiBearerAuth()
@Controller({ path: 'campaigns', version: '1' })
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get('groups')
  async groups() {
    return await this.campaignsService.groups();
  }

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED })
  async create(
    @Body() createCampaignDto: CreateCampaignDto,
    @GetUser() user: User,
  ): Promise<CreateResponseType> {
    return createResponse(
      HttpStatus.CREATED,
      'Campaign created successfully',
      await this.campaignsService.create(createCampaignDto, user),
    );
  }

  @Get()
  findAll() {
    return this.campaignsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignsService.update(+id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignsService.remove(+id);
  }
}
