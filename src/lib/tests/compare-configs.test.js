// Const {default: test} = require('ava');
// const sinon = require('sinon');
// const compareConfigs = require('../compare-configs');
// const rewiremock = require('../../../rewiremock');

// const sandbox = sinon.createSandbox();

// test.before(t => {
//   rewiremock(() => require('../heroku')).with(sandbox.stub());
//   rewiremock(() => require('../configs')).with(sandbox.stub());

//   t.context = {
//     getHerokuConfigs: require('../heroku'),
//     getLocalConfigs: require('../configs'),
//   };
//   rewiremock.enable();
// });

// test.after(() => {
//   rewiremock.disable();
//   sandbox.reset();
// });

// test('compareConfigs should return an empty array', async t => {
//   // T.context.getHerokuConfigs.returns([]);
//   // t.context.getLocalConfigs;
//   t.log(t.context.getLocalConfigs);
//   // T.deepEqual(await compareConfigs('apiToken', 'appName', 'configsPath'), []);
// });
