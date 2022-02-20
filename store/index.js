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
      },
      addMemo(state, memo){
        state.loadedMemos.push(memo)
      },
      deleteMemo(state, id){
        const index = state.loadedMemos.findIndex((v) => v.id === id)
        state.loadedMemos.splice(index, 1)
      },
      addFavo(state, { id, favoriteCount }){
        const index = state.loadedMemos.findIndex((v) => v.id === id)
        const memo = state.loadedMemos[index]
        memo.favorite_count = favoriteCount
        state.loadedMemos.splice(index, 1, memo)
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
      addMemo({ commit }, content){
        return this.$axios
        .post(`${url}/memos`, { memo: { content: content }})
        .then((res) => {
          commit('addMemo', res.data);
        })
      },
      deleteMemo({ commit }, id){
        return this.$axios
        .delete(`${url}/memos/${id}`)
        .then((res) => {
          commit('deleteMemo', id)
        })
      },
      addFavo({ commit }, id){
        return this.$axios
        .post(`${url}/memos/${id}/favorites`)
        .then((res) => {
          commit('addFavo', { id, favoriteCount: res.data.favorite_count })
        })
      }
    },
    getters: {
      loadedMemos(state){
        return state.loadedMemos
      }
    },
  })
}

export default createStore
