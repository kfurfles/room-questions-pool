/// <reference types="vite/client" />

import 'styled-components';
import {ITheme} from '~/styles/theme/default';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
