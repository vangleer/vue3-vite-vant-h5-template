import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// 设置别名
const alias: Record<string, string> = {
  '/@': pathResolve('src'),
  '@': pathResolve('src'),
  '@build': pathResolve('build')
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias },
  plugins: [vue()]
})
