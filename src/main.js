import metaData from './metaData.js';
import platformConfig from './platform.config.json';
import { routes } from './router/routes';
import './library';
import cloudAdminDesigner from './init';

cloudAdminDesigner.init(platformConfig?.appConfig, platformConfig, routes, metaData);
