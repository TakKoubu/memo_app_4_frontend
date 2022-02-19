import Vuex from 'vuex'

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedMemos: []
    },
    mutations: {
      setMemos(state, memos){
        state.loadedMemos = memos
      }
    },
    actions: {
      fetchMemos({ commit }){
        return this.$axios
        .get(`${url}/memos`)
        .then(res => {
          commit('setMemos', res.data)
        })
        .catch(e => console.log(e));
      },
    },
    getters: {
      loadedMemos(state){
        return state.loadedMemos
      }
    },
  })
}

export default createStore
