const core = require('@actions/core');
const compareConfigs = require('./lib/compare-configs');

(async function () {
  const herokuApiToken = core.getInput('heroku-api-key');
  const herokuAppName = core.getInput('heroku-app-name');
  const localConfigsPath = core.getInput('config-path');

  core.notice('Comparing configs...');

  const diff = await compareConfigs(herokuApiToken, herokuAppName, localConfigsPath);

  core.notice('Done comparing configs.');

  if (diff.length) {
    core.setFailed(`The following configs are not present in the Heroku app: ${diff.join(', ')}.`);
  } else {
    core.notice('All configs are present in the Heroku app.');
  }
})().catch(err => core.setFailed(err.message));

