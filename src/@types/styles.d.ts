import 'styled-components'

import { defaultTheme } from './themes/default'

type Theme = typeof defaultTheme


declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}