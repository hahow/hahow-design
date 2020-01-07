const { babel } = require('./package.json');

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  babel,
  webpack: {
    extra: {
      extensions: ['.js', '.jsx'],
    },
  },
};
