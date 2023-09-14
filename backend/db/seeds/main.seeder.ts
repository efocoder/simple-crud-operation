import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Group } from '../../src/campaigns/entities/group.entity';
import { User } from '../../src/users/entities/user.entity';
import { Campaign } from '../../src/campaigns/entities/campaign.entity';

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const groupFactory = factoryManager.get(Group);

    const userFactory = factoryManager.get(User);

    const campaignFactory = factoryManager.get(Campaign);

    await groupFactory.saveMany(4);

    const user = await userFactory.save();

    await campaignFactory.make({
      user: user,
    });

    await campaignFactory.saveMany(14);
  }
}
