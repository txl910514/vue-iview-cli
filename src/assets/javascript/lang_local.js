import Vue from 'vue'
import store from '@/store'
import * as types from '@/store/types'
export const langInit = (data) => {
  let locals = {}
  const localLang = store.state.commonStore.local_lang
  Object.keys(data).forEach((key) => {
    locals[key] = Object.assign(localLang[key], data[key])
  })
  store.commit(types.LOCAL_LANG, locals)
  Object.keys(locals).forEach(lang => {
    Vue.locale(lang, locals[lang])
  })
}
