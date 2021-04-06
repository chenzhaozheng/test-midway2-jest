import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605607943890_7391';


  config.multipart = {
    // fieldSize: '100kb',
    fileSize: 1024 * 11 + 'kb',
    // will append to whilelist
    fileExtensions: ['.xls', '.doc', '.docx', '.pdf', '.zip', '.csv', '.xlsx'],
  };

  // config.assets = {
  //   publicPath: '/public',
  //   devServer: {
  //     command: 'pwd',
  //     port: 8000,
  //   },
  // };

  config.view = {
    defaultViewEngine: 'nunjucks',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
    xframe: {
      enable: false,
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '1000kb',
    jsonLimit: '1000kb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 100,
      depth: 5,
      // allowDots: false,
      parameterLimit: 1000,
    },
  };

  config.midwayFeature = {
    // true 代表 使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: false,
  };

  return config;
};
