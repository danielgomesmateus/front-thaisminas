import Vue from 'vue'
import VueRouter from 'vue-router'

import Contacts from './views/Contacts/Contacts.vue'

import ListProjects from './views/Projects/ListProjects.vue'
//import ViewProject from './views/Projects/ViewProject.vue'

import ListAlbuns from './views/Galleries/ListAlbuns.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/fale-conosco', component: Contacts },
        //{ path: '/categorias', component: '' },
        { path: '/galeria', component: ListAlbuns },
        { path: '/projetos', component: ListProjects }
    ]
})