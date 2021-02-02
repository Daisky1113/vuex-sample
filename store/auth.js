import firebase from '~/plugins/firebase'

export const state = () => ({
  uid: null,
})
export const mutations = {
  setUid(state, uid) {
    state.uid = uid
  },
  clearUid(state) {
    state.uid = null
  }
}
export const actions = {
  async firebaseLogin({ commit }, payload) {
    console.log(payload)
  },

  async firebaseSignUp({ commi }, payload) {
    console.log(payload)
  },

  async fierbaseLogout({ commit }) {
    commit('clearUid')
  }
}
export const getters = {}
