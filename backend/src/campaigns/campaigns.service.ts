import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Group } from './entities/group.entity';
import { STATUS } from 'util/shared';

@Injectable()
export class CampaignsService {
  async groups() {
    return await Group.find();
  }
  create(createCampaignDto: CreateCampaignDto) {
    return 'This action adds a new campaign';
  }

  findAll() {
    return `This action returns all campaigns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaign`;
  }

  update(id: number, updateCampaignDto: UpdateCampaignDto) {
    return `This action updates a #${id} campaign`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaign`;
  }
}
