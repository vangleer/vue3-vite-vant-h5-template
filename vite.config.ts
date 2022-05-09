import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
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
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    }),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  // css: {
  //   // https://github.com/vitejs/vite/issues/5833
  //   postcss: {
  //     plugins: [
  //       {
  //         postcssPlugin: 'internal:charset-removal',
  //         AtRule: {
  //           charset: atRule => {
  //             if (atRule.name === 'charset') {
  //               atRule.remove()
  //             }
  //           }
  //         }
  //       }
  //     ]
  //   }
  // }
})
