import ProjectCategory from '../../services/ProjectCategoryService'

export const state = {
  projectsCategories: [],
  page: {}
}

export const mutations = {
  SET_PROJECT_CATEGORIES(state, projectsCategories) {
    state.projectsCategories = projectsCategories
  },
  SET_PROJECT_CATEGORY(state, page) {
    state.page = page
  }
}

export const actions = {
  getPages({ commit }) {  
    return ProjectCategory.getPages()
      .then(response => {
        commit('SET_PROJECT_CATEGORIES', response.data)
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
      commit('SET_PROJECT_CATEGORY', page)
      return page
    }

    return ProjectCategory.getPageBySlug(slug)
      .then(response => {
        commit('SET_PROJECT_CATEGORY', response.data)
        return response.data
      })
  }
}

export const getters = {
  getPages: state => {
    return state.projectsCategories
  },  
  getPageBySlug: state => slug => {
    return state.projectsCategories.find(page => page.slug == slug)
  }
}