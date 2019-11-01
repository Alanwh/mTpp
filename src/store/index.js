import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: {
      headerTab: 0,
      headerTabs: ['正在热映', '即将上映']
    },
    footer: {
      footerTab: 0,
      footerTabs: [ { title: '热映', icon: '&#xe65b;' }, { title: '院线', icon: '&#xe8c0;' }, { title: '我的', icon: '&#xe616;' } ]
    }
  },
  mutations: {
    'change_header_tab' ({ header }, payload) {
      header.headerTab = payload
    },
    'change_footer_tab' ({ footer }, payload) {
      footer.footerTab = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
