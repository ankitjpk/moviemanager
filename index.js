/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppWithNavigation} from './src/container/app-nav';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppWithNavigation);
