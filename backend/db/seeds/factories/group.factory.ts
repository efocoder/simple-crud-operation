import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Group } from '../../../src/campaigns/entities/group.entity';

export const GroupsFactory = setSeederFactory(Group, (faker: Faker) => {
  const user = new Group();
  user.name = faker.lorem.words();
  return user;
});
