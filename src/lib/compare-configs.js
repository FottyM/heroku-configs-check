const getHerokuConfigs = require('./heroku');
const getLocalConfigs = require('./configs');
const path = require('path');

async function compare(herokuApiToken, herokuAppName, localConfigsPath) {
  const herokuConfigs = await getHerokuConfigs(herokuApiToken, herokuAppName);
  const localConfigs = await getLocalConfigs(path.resolve(localConfigsPath));
  return localConfigs.filter(localConfig => !herokuConfigs.includes(localConfig));
}

module.exports = compare;
