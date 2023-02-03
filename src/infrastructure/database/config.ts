// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const commonConfig = {
  migrationStorageTableName: 'sequelize_meta',
  seederStorageTableName: 'sequelize_data',
  dialect: 'sqlite',
};

module.exports = {
  local: {
    ...commonConfig,
    storage: './database.sqlite3',
  },
  development: {
    ...commonConfig,
    storage: './database.sqlite3',
  },
  test: {
    ...commonConfig,
    storage: ':memory',
  },
  production: {
    ...commonConfig,
  },
};
