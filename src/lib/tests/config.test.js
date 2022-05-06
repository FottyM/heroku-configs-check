const {default: test} = require('ava');
const getConfigs = require('../configs');

test('getConfigs should return an empty array', async t => {
  const configs = await getConfigs(require.resolve('./configs/empty-file.js'));
  t.deepEqual(configs, []);
});

test('getConfigs should return an array of configs', async t => {
  const configs = await getConfigs(require.resolve('./configs/file-with-data.js'));
  t.deepEqual(configs, ['DATABASE_URL', 'REDIS_URL', 'HEROKU_TOKEN', 'CI', 'DELAY']);
});

test('getConfigs should return an array of configs on a ts file with typecasting', async t => {
  const configs = await getConfigs(require.resolve('./configs/file-with-data-two.ts'));
  t.deepEqual(configs, ['DATABASE_URL', 'REDIS_URL', 'HEROKU_TOKEN', 'CI', 'DELAY']);
});

