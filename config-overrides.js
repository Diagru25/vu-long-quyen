const path = require('path');

module.exports = function override(config, env) {
  const alias = {
    src: path.resolve(process.cwd(), 'src', 'app'),
    helper: path.resolve(process.cwd(), 'src', 'packages', 'core', 'helper'),
    shared: path.resolve(process.cwd(), 'src', 'packages', 'shared'),
    adapters: path.resolve(
      process.cwd(),
      'src',
      'packages',
      'core',
      'adapters'
    ),
  };

  config.resolve.alias = alias;

  return config;
};
