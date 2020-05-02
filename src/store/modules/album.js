import AlbumService from '../../services/AlbumService'

import _ from 'lodash'

export const namespaced = true

export const state = {
  albums: [],
  album: {}
}

export const mutations = {
  SET_ALBUMS(state, albums) {
    state.albums = albums
  },
  SET_ALBUM(state, album) {
    state.album = album
  }
}

export const actions = {
  getAlbums({ commit }) {  
    return AlbumService.getAlbums()
      .then(response => {
        commit('SET_ALBUMS', response.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  },
  getAlbumBySlug({ commit, getters, state }, slug) {
    if (slug == state.album.slug) {
      return state.album
    }

    if (state.albums.count >= 1) {
      let album = getters.getAlbumBySlug(slug)

      if (album) {
        commit('SET_ALBUM', album)
        return album
      }  
    }

    return AlbumService.getAlbumBySlug(slug)
      .then(response => {
        commit('SET_ALBUM', response.data)
        return response.data
      })
      .catch(e => {
        console.error(e.message)
      })
  }
}

export const getters = {
  getAlbums: state => {
    return state.albums
  },  
  getAlbumBySlug: state => slug => {
    const albums = state.albums.results
    return _.find(albums, function(album) { return album.slug == slug })
  }
}