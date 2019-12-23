module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false,
  },
  babel: {
    plugins: [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
      "inline-react-svg",
    ],
  },
};
