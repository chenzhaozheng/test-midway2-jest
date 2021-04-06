// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-multipart';
import 'egg-security';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'midway-schedule';
import 'egg-cors';
import 'egg-view-assets';
import 'egg-view-nunjucks';
import 'egg-jwt';
import 'egg-redis';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    schedulePlus?: EggPluginItem;
    cors?: EggPluginItem;
    assets?: EggPluginItem;
    nunjucks?: EggPluginItem;
    jwt?: EggPluginItem;
    redis?: EggPluginItem;
  }
}