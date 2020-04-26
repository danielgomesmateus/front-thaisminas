import ProjectService from '../../services/ProjectService'

export const namespaced = true

export const state = {
  projects: [],
  project: {},
  count: 0
}

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_PROJECT(state, project) {
    state.project = project
  }
}

export const actions = {
  getProjects({ commit }) {  
    return ProjectService.getProjects()
      .then(response => {
        commit('SET_PROJECTS', response.data)
      })
      .catch(e => {
        console.log(e.message)
      })
  },
  getProjectBySlug({ commit, state }, slug) {
    if (slug == state.project.slug) {
      return state.project
    }

    let project = getters.getProjectBySlug(slug)

    if (project) {
      commit('SET_PROJECT', project)
      return project
    }

    return ProjectService.getProjectBySlug(slug)
      .then(response => {
        commit('SET_PROJECT', response.data)
        return response.data
      })
  }
}

export const getters = {
  getProjects: state => {
    return state.projects
  },  
  getProjectBySlug: state => slug => {
    return state.projects.find(project => project.slug == slug)
  }
}