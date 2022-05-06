export default {
  db: {
    url: <string>process.env.DATABASE_URL,
  },
  redis: {
    url: <string>process.env.REDIS_URL,
  },
  herokuToken: <string>process.env.HEROKU_TOKEN,
  env: process.env.NODE_ENV,
  ci: process.env.CI === 'true',
  concurrency: Number(process.env.CONCURRENCY) ?? 1,
  logLevel: <string>process.env.LOG_LEVEL || 'info',
  delay: Number(process.env.DELAY),
}