import dataSource from 'db/data-source';
import { runSeeders } from 'typeorm-extension';

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
