import { setSeederFactory } from 'typeorm-extension';
import { Faker } from '@faker-js/faker';
import { Campaign } from '../../../src/campaigns/entities/campaign.entity';

export const CampaignFactory = setSeederFactory(Campaign, (faker: Faker) => {
  const campaign = new Campaign();
  campaign.title = faker.lorem.sentences(1);
  campaign.description = faker.lorem.paragraphs(4);

  return campaign;
});
