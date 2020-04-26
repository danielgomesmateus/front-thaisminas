import ProjectCategoryService from '../../services/ProjectCategoryService'

export const state = {
  projectsCategories: [],
  projectCategory: {}
}

export const mutations = {
  SET_PROJECT_CATEGORIES(state, projectsCategories) {
    state.projectsCategories = projectsCategories
  },
  SET_PROJECT_CATEGORY(state, projectCategory) {
    state.projectCategory = projectCategory
  }
}

export const actions = {
  getProjectsCategories({ commit }) {  
    return ProjectCategoryService.getProjectsCategories()
      .then(response => {
        commit('SET_PROJECT_CATEGORIES', response.data)
      })
      .catch(e => {
        console.log(e.message)
      })
  },
  getProjectCategoryBySlug({ commit, state }, slug) {
    if (slug == state.projectCategory.slug) {
      return state.projectCategory
    }

    let projectCategory = getters.getProjectCategoryBySlug(slug)

    if (projectCategory) {
      commit('SET_PROJECT_CATEGORY', projectCategory)
      return projectCategory
    }

    return ProjectCategoryService.getProjectCategoryBySlug(slug)
      .then(response => {
        commit('SET_PROJECT_CATEGORY', response.data)
        return response.data
      })
  }
}

export const getters = {
  getProjectsCategories: state => {
    return state.projectsCategories
  },  
  getProjectCategoryBySlug: state => slug => {
    return state.projectsCategories.find(projectCategory => projectCategory.slug == slug)
  }
}