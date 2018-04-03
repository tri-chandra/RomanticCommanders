import axios from 'axios'

const store = {
  state: {
    skills: [],
    requestUrl: 'https://spreadsheets.google.com/feeds/list/1X5kRt0hWcNHJy4l9R9nYbQo9Q3rKXZLJOqwVmwz7-OA/3/public/full?alt=json'
  },

  getters: {
    skills(state) {
      return state.skills
    },
    getSkills(state) {
      return (name) => {
        return {...state.skills.find(val => val.name===name)}
      }
    }
  },

  mutations: {
    setSkills(state, value) {
      if (value) {
        state.skills = value
      }
    }
  },

  actions: {
    initSkillStore({ state, commit }) {
      // axios.get(state.requestUrl).then((response) => {
      //   const payload = response.data
      //   const dataset = payload.feed.entry.map((item) => {
      //     return {
      //       name: item.gsx$name.$t,
      //       description: item.gsx$description.$t
      //     }
      //   })

      //   commit('setSkills', dataset)
      // }).catch((err) => {
      //   console.log(err)
      // })
    }
  }
}

export default store
