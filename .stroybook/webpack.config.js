const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
      '@styles': path.resolve(__dirname, '../src/assets/styles'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@templates': path.resolve(__dirname, '../src/components/templates'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@helpers': path.resolve(__dirname, '../src/helpers'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      // '@storybook': path.resolve(__dirname, './storybook/'), // @storybook의 예약어가 이미 설정되어 있기 때문에 충돌난다. 사용하지 않는다.
      '@storybookDummies': path.resolve(__dirname, './dummies/'),
      '@storybookHelpers': path.resolve(__dirname, './helpers/'),
    },
  };

  return config;
};
