const co = require('co');
const Heroku = require('heroku-client');

function * getHerokuEnvVars(token, name) {
	const heroku = new Heroku({token});
	const configs = yield heroku.get(`/apps/${name}/config-vars`);
	return Object.values(configs);
}

module.exports = co.wrap(getHerokuEnvVars);
