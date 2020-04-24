import Vue from 'vue'
import Vuex from 'vuex'

import * as pages from '@/store/modules/pages'
import * as categories from '@/store/modules/categoriesProjects'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      pages,
      categories
    },
    state: {
    }
})