export const CONFIG_KEY = 'app-config'
// 默认配置
const defaultConfig = {
  theme: 'light',
  locale: 'zh'
}

export function getConfig() {
  return JSON.parse(localStorage.getItem(CONFIG_KEY) || JSON.stringify(defaultConfig))
}
export function setConfig(conf: any) {
  const config = JSON.parse(localStorage.getItem(CONFIG_KEY) || JSON.stringify(defaultConfig))

  Object.keys(conf).forEach((key) => {
    config[key] = conf[key]
  })

  localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
}
