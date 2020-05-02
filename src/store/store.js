import Vue from 'vue'
import Vuex from 'vuex'

import * as project from './modules/project'
import * as album from './modules/album'
import * as page from './modules/page'
import * as projectCategory from './modules/projectCategory'
import * as slide from './modules/slide'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    album,
    page,
    projectCategory,
    slide
  },
  state: {
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    items: [
      { title: 'Home', action: 'mdi-home', path: '/' },
      { title: 'Projetos', action: 'mdi-projector', path: '/projetos' },
      { title: 'Álbums', action: 'mdi-image-search-outline', path: '/albums'  },
      { title: 'Fale Conosco', action: 'mdi-email-newsletter', path: '/fale-conosco'  }
    ]
  }
})