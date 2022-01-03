/// <reference types="vite/client" />

import 'styled-components';
import 'react-redux';
import {ITheme} from '~/styles/theme/default';
import {IRootState} from './redux/'
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}

declare module 'react-redux' {
  export interface DefaultRootState extends IRootState {}
}