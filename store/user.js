import firebase from '~/plugins/firebase'

export const state = () => ({
  userName: '',
  userPhoto: ''
})
export const mutations = {
  setUserName(state, userName) {
    state.userName = userName
  },
  clearUserName(state) {
    state.userName = ''
  },
  setUserPhoto(state, userPhoto) {
    state.userPhoto = userPhoto
  },
  clearUserPhoto(state) {
    state.userPhoto = ''
  }
}
export const actions = {
  async createuser({ commit }, payload) {
    const { uid, ...data } = payload
    await firebase.firestore().doc(`users/${uid}`).set(data)
    commit('setUserName', data.userName)
    commit('setUserPhoto', data.photoUrl)
  }
}
export const getters = {}
