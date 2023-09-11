import { Faker } from '@faker-js/faker';
import { Group } from 'src/campaigns/entities/group.entity';
import { setSeederFactory } from 'typeorm-extension';

export const GroupsFactory = setSeederFactory(Group, (faker: Faker) => {
  const user = new Group();
  user.name = faker.lorem.words();
  return user;
});
