const {default: test} = require('ava');
const Heroku = require('heroku-client');
const getHerokuEnvVars = require('../heroku');
const sinon = require('sinon');

const sandbox = sinon.createSandbox();

test.before(t => {
  t.context.get = sinon.stub(Heroku.prototype, 'get');
});

test.after(() => {
  sandbox.restore();
});

test('getHerokuEnvVars should return an empty array', async t => {
  t.context.get.resolves({});
  const envVars = await getHerokuEnvVars('token', 'name');
  t.deepEqual(envVars, []);
});

test('getHerokuEnvVars should return an array with one element', async t => {
  t.context.get.resolves({
    FOO: 'bar',
  });
  const envVars = await getHerokuEnvVars('token', 'name');
  t.deepEqual(envVars, ['FOO']);
});

test('getHerokuEnvVars should throw an error', async t => {
  t.context.get.rejects(new Error('foo'));
  await t.throwsAsync(getHerokuEnvVars('token', 'name'));
});
