import PageService from '../../services/PageService'

export const state = {
  pages: [],
  page: {}
}

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  SET_PAGE(state, page) {
    state.page = page
  }
}

export const actions = {
  getPages({ commit }) {  
    return PageService.getPages()
      .then(response => {
        commit('SET_PAGES', response.data)
      })
      .catch(e => {
        console.log(e.message)
      })
  },
  getPageBySlug({ commit, state }, slug) {
    if (slug == state.page.slug) {
      return state.page
    }

    let page = getters.getPageBySlug(slug)

    if (page) {
      commit('SET_PAGE', page)
      return page
    }

    return PageService.getPageBySlug(slug)
      .then(response => {
        commit('SET_PAGE', response.data)
        return response.data
      })
  }
}

export const getters = {
  getPages: state => {
    return state.pages
  },  
  getPageBySlug: state => slug => {
    return state.pages.find(page => page.slug == slug)
  }
}