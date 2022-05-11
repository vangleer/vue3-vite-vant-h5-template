import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { Locale } from 'vant'

import enLocale from 'vant/es/locale/lang/en-US'
import zhLocale from 'vant/es/locale/lang/zh-CN'
import zhCN from '../config/locales/zh-CN'
import enUS from '../config/locales/en-US'

export const i18nKey = 'responsive-locale'

const messages = {
  zh: zhCN,
  en: enUS
}

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})
export function useI18n(app: App) {
  app.use(i18n)
}

export const t = (key: string) => i18n.global.t(key)

/**
 * 设置语言
 * @param key string | undefined
 */
export function changeLocale(key?: string) {
  if (!key) {
    key = i18n.global.locale.value === 'zh' ? 'en' : 'zh'
  }
  i18n.global.locale.value = key
  key === 'zh' ? Locale.use('zh-CN', zhLocale) : Locale.use('en-US', enLocale)
}