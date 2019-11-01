import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultHeaderTab = 0
try {
  if (localStorage.headerTab) {
    defaultHeaderTab = localStorage.headerTab
  }
} catch {}

let defaultFooterTab = 0
try {
  if (localStorage.footerTab) {
    defaultFooterTab = localStorage.footerTab
  }
} catch {}

export default new Vuex.Store({
  state: {
    header: {
      headerTab: defaultHeaderTab,
      headerTabs: ['正在热映', '即将上映']
    },
    footer: {
      footerTab: defaultFooterTab,
      footerTabs: [ { title: '热映', icon: '&#xe65b;' }, { title: '院线', icon: '&#xe8c0;' }, { title: '我的', icon: '&#xe616;' } ]
    }
  },
  mutations: {
    'change_header_tab' ({ header }, payload) {
      header.headerTab = payload
      try {
        localStorage.headerTab = payload
      } catch {}
    },
    'change_footer_tab' ({ footer }, payload) {
      footer.footerTab = payload
      try {
        localStorage.footerTab = payload
      } catch {}
    }
  },
  actions: {
  },
  modules: {
  }
})
