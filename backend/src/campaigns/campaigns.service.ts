import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Group } from './entities/group.entity';
import { STATUS } from 'util/shared';
import { Campaign } from './entities/campaign.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class CampaignsService {
  private readonly logger = new Logger(CampaignsService.name);

  async groups(): Promise<Group[]> {
    return await Group.find({ where: { status: STATUS.active } });
  }

  async create(createCampaignDto: CreateCampaignDto, user: User) {
    const { title, description, groupId } = createCampaignDto;

    const group = await Group.findOneBy({
      id: groupId,
      status: STATUS.active,
    });
    if (group === null)
      throw new NotFoundException('Group specified does not exist');

    try {
      const campaign: Campaign = Campaign.create({
        title,
        description,
        user,
        group,
      });
      await campaign.save();
      campaign.reload();

      return campaign;
    } catch (error) {
      this.logger.error('Error occured');
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }

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
