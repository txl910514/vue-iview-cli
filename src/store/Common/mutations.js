/**
 * Created by txl-pc on 2017/8/4.
 */
import * as types from '@/store/types'
import { langInit } from '../../assets/javascript/lang_local'
const mutations = {
  [types.SEARCH_MUSIC] (state, response) {
    if (response.data.success) {
      langInit(response.data.data)
      state.search_data = response.data.data
    }
  },
  [types.LOCAL_LANG] (state, response) {
    state.local_lang = response
  }
}
export default mutations
