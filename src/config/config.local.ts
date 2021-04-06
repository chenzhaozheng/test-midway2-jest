// import path = require("path");

export default (appInfo: any) => {
  const config: any = {};
  config.fileUrl = 'http://localhost:7001';

  config.assets = {
    publicPath: '/public',
    devServer: {
      command: 'pwd',
      port: 8000,
    },
  };

  return config;
};
