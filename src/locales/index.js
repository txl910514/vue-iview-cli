const files = require.context('.', true, /\.js$/)

import zhLocale from 'iview/dist/locale/zh-CN'
import enLocale from 'iview/dist/locale/en-US'
import store from '@/store'
import * as types from '@/store/types'

let customZh = {}
let customEn = {}
let locale = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  console.log(files(key))
  Object.assign(customZh, files(key).default['zh'])
  Object.assign(customEn, files(key).default['en'])
})

function addLang (key, a, b) {
  locale[key] = Object.assign(a, b)
}
console.log(customZh)
addLang('zh', customZh, zhLocale)
addLang('en', customEn, enLocale)
store.commit(types.LOCAL_LANG, locale)
export default locale
