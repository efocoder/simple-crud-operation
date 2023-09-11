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
import { GetCampaignFilterDto } from './dto/get-campaign-filter.dto';

@Injectable()
export class CampaignsService {
  private readonly logger = new Logger(CampaignsService.name);

  async groups(): Promise<Group[]> {
    return await Group.find({ where: { status: STATUS.active } });
  }

  async create(
    createCampaignDto: CreateCampaignDto,
    user: User,
  ): Promise<Campaign> {
    const { title, description, groupId } = createCampaignDto;

    const group = await this.get_group(groupId);

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
  }

  async findAll(): Promise<Campaign[]> {
    const campaigns: Campaign[] = await Campaign.find({
      where: { status: STATUS.active },
    });
    return campaigns;
  }

  async findCampaignsWithFilter(
    filterDto: GetCampaignFilterDto,
  ): Promise<Campaign[]> {
    const { search } = filterDto;

    const campaigns: Campaign[] = await Campaign.createQueryBuilder('campaign')
      .leftJoinAndSelect('campaign.group', 'group')
      .leftJoinAndSelect('campaign.user', 'user')
      .where(
        'user.nickname ILIKE :userName OR user.email = :email OR user.phone = :phone',
        { userName: `%${search}%`, email: search, phone: search },
      )
      .getMany();

    return campaigns;
  }

  async findOne(id: string) {
    const campaign: Campaign = await Campaign.findOneBy({
      id: id,
      status: STATUS.active,
    });

    if (campaign === null) throw new NotFoundException('Group does not exist');

    return campaign;
  }

  async update(id: string, updateCampaignDto: UpdateCampaignDto) {
    const { title, description, groupId } = updateCampaignDto;

    const campaign: Campaign = await this.findOne(id);

    let group: Group;

    if (groupId !== null) group = await this.get_group(groupId);
    if (title !== null) campaign.title = title;
    if (description !== null) campaign.description = description;
    campaign.group = group;

    campaign.save();
    campaign.reload();

    return campaign;
  }

  async remove(id: string): Promise<void> {
    const campaign: Campaign = await this.findOne(id);
    campaign.status = STATUS.deleted;
    campaign.save();
  }

  private async get_group(id: string) {
    const group = await Group.findOneBy({
      id: id,
      status: STATUS.active,
    });

    if (group === null)
      throw new NotFoundException('Group selected does not exist');

    return group;
  }
}
