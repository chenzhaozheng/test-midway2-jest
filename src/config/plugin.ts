import { EggPlugin } from 'egg';
export default {
  static: true, // default is true
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  // redis-cli -h shan.newbeeaichain.com -p 4870 -a 123456
  redis: {
    enable: true,
    package: 'egg-redis',
  },
} as EggPlugin;
