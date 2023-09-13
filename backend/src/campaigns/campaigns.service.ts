import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateCampaignDto, CreateGroupDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Group } from './entities/group.entity';
import { Campaign } from './entities/campaign.entity';
import { User } from 'src/users/entities/user.entity';
import { GetCampaignFilterDto } from './dto/get-campaign-filter.dto';

import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { STATUS } from '../../util/shared';

@Injectable()
export class CampaignsService {
  private readonly logger = new Logger(CampaignsService.name);

  async groups(): Promise<Group[]> {
    return await Group.find({ where: { status: STATUS.active } });
  }

  async createGroup(createGroupDto: CreateGroupDto) {
    const { name } = createGroupDto;

    const group = Group.create({ name });

    await group.save();
    await group.reload();

    return group;
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
      await campaign.reload();

      return campaign;
    } catch (error) {
      this.logger.error('Error occurred');
      this.logger.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  async paginate(
    options: IPaginationOptions,
    filterDto?: GetCampaignFilterDto,
  ): Promise<Pagination<Campaign>> {
    const queryBuilder = Campaign.createQueryBuilder('campaign');
    queryBuilder
      .leftJoinAndSelect('campaign.group', 'group')
      .leftJoinAndSelect('campaign.user', 'user');

    if (filterDto && Object.keys(filterDto).length) {
      const { search } = filterDto;
      await queryBuilder
        .where(
          'user.nickname ILIKE :userName OR user.email = :email OR user.phone = :phone',
          { userName: `%${search}%`, email: search, phone: search },
        )
        .getMany();
    } else {
      queryBuilder.where({ status: STATUS.active });
    }
    queryBuilder.orderBy('campaign.created_at', 'DESC'); // Or whatever you need to do

    return paginate<Campaign>(queryBuilder, options);
  }

  async findAll(): Promise<Campaign[]> {
    return await Campaign.find({
      where: { status: STATUS.active },
    });
  }

  async findCampaignsWithFilter(
    filterDto: GetCampaignFilterDto,
  ): Promise<Campaign[]> {
    const { search } = filterDto;

    return await Campaign.createQueryBuilder('campaign')
      .leftJoinAndSelect('campaign.group', 'group')
      .leftJoinAndSelect('campaign.user', 'user')
      .where(
        'user.nickname ILIKE :userName OR user.email = :email OR user.phone = :phone',
        { userName: `%${search}%`, email: search, phone: search },
      )
      .getMany();
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

    await campaign.save();
    await campaign.reload();

    return campaign;
  }

  async remove(id: string): Promise<void> {
    const campaign: Campaign = await this.findOne(id);
    campaign.status = STATUS.deleted;
    await campaign.save();
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
