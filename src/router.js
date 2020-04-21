import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './views/Contacts/Contacts.vue'

import ListProjects from './views/Projects/ListProjects.vue'
import ViewProject from './views/Projects/ViewProject.vue'

import ListAlbuns from './views/Galleries/ListAlbuns.vue'
import ViewAlbum from './views/Galleries/ViewAlbum.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/fale-conosco', component: Contacts },
        //{ path: '/categorias', component: '' },
        { path: '/albums', component: ListAlbuns },
        { path: '/album/:slug', component: ViewAlbum },

        { path: '/projetos', component: ListProjects },
        { path: '/projeto/:slug', component: ViewProject }
    ]
})