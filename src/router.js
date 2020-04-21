import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home.vue'

import Contacts from './views/Contacts/Contacts.vue'

import ListProjects from './views/Projects/ListProjects.vue'
import ViewProject from './views/Projects/ViewProject.vue'

import ListAlbums from './views/Galleries/ListAlbums.vue'
import ViewAlbum from './views/Galleries/ViewAlbum.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/fale-conosco', component: Contacts },

        { path: '/albums', component: ListAlbums },
        { path: '/album/:slug', component: ViewAlbum },

        { path: '/projetos', component: ListProjects },
        { path: '/projeto/:slug', component: ViewProject }
    ]
})