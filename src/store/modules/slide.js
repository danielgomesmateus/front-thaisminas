import SlideService from '../../services/SlideService'

export const namespaced = true

export const state = {
  slides: []
}

export const mutations = {
  SET_SLIDES(state, slides) {
    state.slides = slides
  }
}

export const actions = {
  getSlides({ commit }) {  
    return SlideService.getSlides()
      .then(response => {
        commit('SET_SLIDES', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getSlides: state => {
    return state.slides
  }
}