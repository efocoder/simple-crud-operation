import { Faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../../src/users/entities/user.entity';

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.email = 'test@test.com';
  user.nickname = faker.person.firstName();
  user.phone = faker.phone.number('0#########');
  user.password = 'password';
  return user;
});
