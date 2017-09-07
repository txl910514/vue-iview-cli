<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <div>
      <div v-for="search in searchs">{{search.nameZh}}</div>
    </div>
    <!--<div>-->
      <!--<div v-html="item" v-for="item in textData"></div>-->
    <!--</div>-->
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <li><a href="http://www.baidu.com">{{$t('cancel')}}</a></li>
    </ul>
    <h4 @click="switchLang">{{$t('language')}}</h4>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { mapActions, mapState } from 'vuex'
  import * as types from '@/store/types'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      searchs () {
        const lang = this.$cookie.get('lang') || 'zh'
        return Vue.t('hos_list') === 'hos_list' ? this.commonStore.local_lang[lang]['hos_list'] : Vue.t('hos_list')
      },
//      textData () {
//        return this.commonStore.search_data
//      },
      ...mapState(['commonStore'])
    },
    mounted () {
      this.SEARCH_MUSIC({page: 1})
    },
    methods: {
      switchLang () {
        let targetLang = this.$lang === 'zh' ? 'en' : 'zh'
        this.$cookie.set('lang', targetLang)
        Vue.config.lang = targetLang
      },
      ...mapActions([types.SEARCH_MUSIC])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
