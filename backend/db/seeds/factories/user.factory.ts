import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../../src/users/entities/user.entity';

export const GroupsFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.nickname = faker.person.firstName();
  user.phone = '0245334551';
  user.password = 'password';
  return user;
});
