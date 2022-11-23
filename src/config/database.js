require('dotenv').config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  url: process.env.POSTGRES_URL,
  host: process.env.DB_HOST,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
