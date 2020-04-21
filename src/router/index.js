import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import PageNotFound from '../views/PageNotFound'

import Contacts from '../views/Contacts/Contacts'

import ListProjects from '../views/Projects/ListProjects'
import ViewProject from '../views/Projects/ViewProject'
import ListCategoriesProjects from '../views/Projects/ListCategoriesProjects'

import ListAlbums from '../views/Galleries/ListAlbums'
import ViewAlbum from '../views/Galleries/ViewAlbum'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '*', component: PageNotFound },
    { path: '/pagina-nao-encontrada', component: PageNotFound },

    { path: '/fale-conosco', component: Contacts },

    { path: '/albums', component: ListAlbums },
    { path: '/album/:slug', component: ViewAlbum },

    { path: '/projetos', component: ListProjects },
    { path: '/projeto/:slug', component: ViewProject },
    { path: '/projeto-categorias/:slug', component: ListCategoriesProjects }
  ]
})