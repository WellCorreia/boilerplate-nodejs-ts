import env from './env';

export default {
  host: env.database.host,
  username: env.database.user,
  password: env.database.pass,
  database: env.database.db,
  dialect: env.database.dialect,
  port: env.database.port,
  storage: env.test.storage,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    paranoid: true,
  },
};
