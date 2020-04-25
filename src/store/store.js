import Vue from 'vue'
import Vuex from 'vuex'

import * as page from './modules/page'
import * as ProjectCategory from './modules/projectCategory'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page,
    ProjectCategory
  },
  state: {
  }
})