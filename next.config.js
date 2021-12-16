const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'admin2',
        mongodb_password: 'IxdjLhTRb1JcysLf',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'admin2',
      mongodb_password: 'IxdjLhTRb1JcysLf',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    },
  };
};
