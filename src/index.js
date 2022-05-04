const core = require('@actions/core');
const compareConfigs = require('./lib/compare-configs');

(function * () {
	try {
		const herokuApiToken = core.getInput('heroku-api-key');
		const herokuAppName = core.getInput('heroku-app-name');
		const localConfigsPath = core.getInput('config-path');

		core.info('Comparing configs...');

		const diff = yield compareConfigs(herokuApiToken, herokuAppName, localConfigsPath);

		if (diff.length > 0) {
			core.setOutput('missing-env-vars', diff);
			core.setFailed(`The following configs are not present in the Heroku app: ${diff.join(', ')}`);
		} else {
			core.info('All configs are present in the Heroku app.');
		}
	} catch (error) {
		core.setFailed(error.message);
	}
})();

