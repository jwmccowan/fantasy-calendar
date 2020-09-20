// const path = require('path');
// const isDevelopment = process.env.NODE_ENV !== 'production';
// const rootDir = isDevelopment ? 'src' : 'dist';

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'fantasy-cal',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
