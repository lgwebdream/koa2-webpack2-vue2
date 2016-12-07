import * as types from '../mutation-types.js'
const state = { data: [] }
// actions
const actions = {
  checkout({
    commit, state
  }) {
    commit(types.CHECKOUT_REQUEST)
  }
}

// mutations
const mutations = {
  [types.CHECKOUT_REQUEST](state) {
    return state.data;
  }, [types.ADD_INFO](state, {
    txt
  }) {
    state.data.push(txt);
    console.log(txt);
  }
}

export default {
  state,
  actions,
  mutations
}
