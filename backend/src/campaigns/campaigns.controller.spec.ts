import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { JwtService } from '@nestjs/jwt';
import { CreateCampaignDto, CreateGroupDto } from './dto/create-campaign.dto';
import { getConnectionToken } from '@nestjs/typeorm';

describe('CampaignsController', () => {
  let controller: CampaignsController;
  let service: CampaignsService;

  const groupMock: CreateGroupDto = {
    id: '5eed39d9-4e47-46f5-bde9-6b3d7903e519',
    name: 'group1',
  };

  const campaignMock: CreateCampaignDto = {
    title: 'test title',
    description: 'this is a test',
    groupId: groupMock.id,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsController],
      providers: [
        CampaignsService,
        JwtService,
        {
          provide: CampaignsService,
          useValue: {
            groupNew: jest.fn().mockResolvedValue(groupMock),
            groupConstructor: jest.fn().mockResolvedValue(groupMock),
            groupCreate: jest.fn().mockResolvedValue(groupMock),

            cNew: jest.fn().mockResolvedValue(campaignMock),
            cConstructor: jest.fn().mockResolvedValue(campaignMock),
            cCreate: jest.fn().mockResolvedValue(campaignMock),
          },
        },
        { provide: getConnectionToken(), useValue: {} },
      ],
    }).compile();

    controller = module.get<CampaignsController>(CampaignsController);
    service = module.get(CampaignsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
