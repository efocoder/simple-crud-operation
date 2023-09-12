import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetCampaignFilterDto } from './dto/get-campaign-filter.dto';
import { UserGuard } from '../users/user.guard';
import { GetUser } from '../users/get_user.decorator';
import { User } from '../users/entities/user.entity';
import { createResponse, CreateResponseType } from '../../util/shared';

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
  async find(
    @Req() req: Request,
    @Query() filterDto?: GetCampaignFilterDto,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.campaignsService.paginate(
      {
        page,
        limit,
        route: `${req.protocol}://${req.get('Host')}${req.originalUrl}`,
      },
      filterDto,
    );

    // if (Object.keys(filterDto).length) {
    //   campaigns = await this.campaignsService.findCampaignsWithFilter(
    //     filterDto)
    // } else {
    //   campaigns = await this.campaignsService.findAll()
    // }

    // return createResponse(HttpStatus.OK, 'Request successful', campaigns);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CreateResponseType> {
    return createResponse(
      HttpStatus.OK,
      'Request successful',
      await this.campaignsService.findOne(id),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ): Promise<CreateResponseType> {
    return createResponse(
      HttpStatus.OK,
      'Request successful',
      await this.campaignsService.update(id, updateCampaignDto),
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<CreateResponseType> {
    await this.campaignsService.remove(id);
    return createResponse(HttpStatus.NO_CONTENT, 'Campaign deleted');
  }
}
