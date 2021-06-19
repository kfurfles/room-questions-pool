import {
  compilerOptions
} from './tsconfig.json'

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path';

const alias = Object.entries(compilerOptions.paths)
  .reduce((acc,[key, [value]]) => {
  const aliasKey = key.substring(0, key.length - 2)
  const path = value.substring(0, value.length - 2)
  return {
    ...acc,
    [aliasKey]: resolve(__dirname, path)
  }
}, {})

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias
  }
})
