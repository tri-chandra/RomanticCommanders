import axios from 'axios'

const store = {
  state: {
    commanders: [],
    requestUrl: 'https://spreadsheets.google.com/feeds/list/1X5kRt0hWcNHJy4l9R9nYbQo9Q3rKXZLJOqwVmwz7-OA/1/public/full?alt=json'
  },

  getters: {
    commanders(state) {
      return state.commanders
    },
    getCommanders(state) {
      return (name) => {
        return {...state.commanders.find(val => val.name===name)}
      }
    }
  },

  mutations: {
    setCommanders(state, value) {
      if (value) {
        state.commanders = value
      }
    }
  },

  actions: {
    initCommanderStore({ state, commit }) {
      axios.get(state.requestUrl).then((response) => {
        const payload = response.data
        const dataset = payload.feed.entry.map((item) => {
          return {
            name: item.gsx$name.$t,
            class: item.gsx$class.$t,
            type: item.gsx$type.$t,
            subtype: item.gsx$subtype.$t,
            banner: item.gsx$banner.$t,
          }
        })

        commit('setCommanders', dataset)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

export default store
