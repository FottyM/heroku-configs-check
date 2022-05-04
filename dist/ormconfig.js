
export default {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: ['dist/**/*.entity{.ts,.js}'],
	migrations: ['dist/**/migrations/*.js'],
	cli: {
		migrationsDir: 'src/migrations',
	},
	logger: 'advanced-console',
	logging: true,
	ssl: process.env.NODE_ENV === 'production' ? {rejectUnauthorized: false} : false,
};
