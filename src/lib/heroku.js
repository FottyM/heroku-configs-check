const Heroku = require('heroku-client');

async function getHerokuEnvVars(token, name) {
  const heroku = new Heroku({token});
  const configs = await heroku.get(`/apps/${name}/config-vars`);
  return Object.keys(configs);
}

module.exports = getHerokuEnvVars;
