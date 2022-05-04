const getHerokuConfigs = require('../lib/heroku');
const getLocalConfigs = require('../lib/configs');
const co = require('co');
const path = require('path');

function * compare(herokuApiToken, herokuAppName, localConfigsPath) {
	const herokuConfigs = yield getHerokuConfigs(herokuApiToken, herokuAppName);
	const localConfigs = yield getLocalConfigs(path.resolve(localConfigsPath));
	return localConfigs.filter(localConfig => !herokuConfigs.includes(localConfig));
}

module.exports = co.wrap(compare);
