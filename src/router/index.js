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
    { 
      path: '/', 
      component: Home, 
      meta: {
        title: 'TMinas - Página inicial',
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Página Inicial'
          },
          {
            property: 'og:description',
            content: 'TMinas - Página Inicial'
          }
        ]
      } 
    },
    { 
      path: '*', 
      component: PageNotFound, 
      meta: {
        title: 'TMinas - Página não encontrada', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - 404 - Página não encontrada'
          },
          {
            property: 'og:description',
            content: 'TMinas - 404 - Página não encontrada'
          }
        ]
      }
    },
    { 
      path: '/pagina-nao-encontrada', 
      component: PageNotFound, 
      meta: {
        title: 'TMinas - Página não encontrada', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - 404 - Página não encontrada.'
          },
          {
            property: 'og:description',
            content: 'TMinas - 404 - Página não encontrada.'
          }
        ]
      }
    },
    { 
      path: '/fale-conosco', 
      component: Contacts, 
      meta: {
        title: 'TMinas - Fale conosco', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Entre em contato'
          },
          {
            property: 'og:description',
            content: 'TMinas - Entre em contato'
          }
        ]
      }
    },
    { 
      path: '/albums', 
      component: ListAlbums, 
      meta: {
        title: 'TMinas - Álbums', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Álbums'
          },
          {
            property: 'og:description',
            content: 'TMinas - Álbums'
          }
        ]
      }
    },
    { 
      path: '/album/:slug', 
      component: ViewAlbum, 
      meta: {
        title: 'TMinas - Álbum', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Álbum'
          },
          {
            property: 'og:description',
            content: 'TMinas - Álbum'
          }
        ]
      }
    },
    { 
      path: '/projetos', 
      component: ListProjects, 
      meta: {
        title: 'TMinas - Projetos', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Projetos'
          },
          {
            property: 'og:description',
            content: 'TMinas - Projetos'
          }
        ]
      }
    },
    { 
      path: '/projeto/:slug', 
      component: ViewProject, 
      meta: {
        title: 'TMinas - Projeto', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Projeto'
          },
          {
            property: 'og:description',
            content: 'TMinas - Projeto'
          }
        ]
      }
    },
    { 
      path: '/projeto-categorias/:slug', 
      component: ListCategoriesProjects, 
      meta: {
        title: 'TMinas - Categorias', 
        metaTags: [
          {
            name: 'description',
            content: 'TMinas - Categorias'
          },
          {
            property: 'og:description',
            content: 'TMinas - Categorias'
          }
        ]
      }
    }
  ]
})