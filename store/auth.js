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
    const data = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    const uid = data.user.uid
    commit('setUid', uid)
  },

  async firebaseSignUp({ commit }, payload) {
    const data = await firebase.auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
    commit('setUid', data.user.uid)
  },

  async fierbaseLogout({ commit }) {
    firebase.auth().signOut()
    commit('clearUid')
  }
}
export const getters = {}
