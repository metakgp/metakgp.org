import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import PackageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: PackageJson.homepage,
  plugins: [react()]
})
