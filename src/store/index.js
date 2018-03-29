import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import commanderStore from './modules/commander-store'
import artifactStore from './modules/artifact-store'
import metaStore from './modules/meta-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isReady: false,
    requestUrl: 'https://spreadsheets.google.com/feeds/list/1X5kRt0hWcNHJy4l9R9nYbQo9Q3rKXZLJOqwVmwz7-OA/1/public/full?alt=json'
  },

  getters: {
    isReady(state) {
      return state.isReady
    }
  },

  mutations: {
    setToReady(state) {
      state.isReady = true
    }
  },

  actions: {
    init({ dispatch, commit, state }) {
      dispatch('initCommanderStore').then(() => {
        dispatch('initArtifactStore').then(()=> {
          commit('setToReady')
        })
      })
    }
  },

  modules: {
    commanderStore,
    artifactStore,
    metaStore
  }
})

store.dispatch('init')

export default store
