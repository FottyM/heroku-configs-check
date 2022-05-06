const configs = {
  db: {
    url: process.env.DATABASE_URL,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  herokuToken: process.env.HEROKU_TOKEN,
  env: process.env.NODE_ENV,
  ci: process.env.CI === 'true',
  concurrency: process.env.CONCURRENCY ?? 1,
  logLevel: process.env.LOG_LEVEL || 'info',
  delay: Number(process.env.DELAY),
};

module.exports = configs;

