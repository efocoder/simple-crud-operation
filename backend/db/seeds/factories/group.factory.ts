import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Group } from '../../../src/campaigns/entities/group.entity';

export const GroupsFactory = setSeederFactory(Group, (faker: Faker) => {
  const group = new Group();
  group.name = faker.lorem.words();
  return group;
});
