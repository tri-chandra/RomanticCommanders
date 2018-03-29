import axios from 'axios'

const store = {
  state: {
    artifacts: [],
    requestUrl: 'https://spreadsheets.google.com/feeds/list/1X5kRt0hWcNHJy4l9R9nYbQo9Q3rKXZLJOqwVmwz7-OA/2/public/full?alt=json'
  },

  getters: {
    artifacts(state) {
      return state.artifacts
    },
    getArtifacts(state) {
      return (name) => {
        return {...state.artifacts.find(val => val.name===name)}
      }
    }
  },

  mutations: {
    setArtifacts(state, value) {
      if (value) {
        state.artifacts = value
      }
    }
  },

  actions: {
    initArtifactStore({ state, commit }) {
      axios.get(state.requestUrl).then((response) => {
        const payload = response.data
        const dataset = payload.feed.entry.map((item) => {
          return {
            name: item.gsx$name.$t,
            class: item.gsx$class.$t,
            type: item.gsx$type.$t,
            rarity: item.gsx$rarity.$t
          }
        })

        commit('setArtifacts', dataset)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

export default store
