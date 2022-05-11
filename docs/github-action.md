# Github Actions 配置

### [参考文档](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

### 修改部署配置
1. 在package.json中添加一个homepage字段
```json
"homepage": "https://[username].github.io/github-actions-demo"
```
- 将[username]替换成你的 GitHub 用户名

2. 在vite.config.ts中修改base
```js
export default ({ mode }) => defineConfig({
  base: mode === 'production' ? '/vue3-vite-vant-h5-template/' : '/',
})
```
- 这需要注意一下，由于github pages默认的地址是包含子目录的，所以我这这需要指定一下 base 的路径为我们的项目名。


### 配置文件

- 在这个仓库的.github/workflows目录，生成一个 workflow 文件，名字可以随便取，这个示例是ci.yml
```yml
# ci.yml
name: Vue3 Vite Vant H5 Template 
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@main

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@main
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: dist
        BUILD_SCRIPT: npm install && npm run build
```