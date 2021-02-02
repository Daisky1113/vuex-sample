import firebase from '~/plugins/firebase'

export const state = () => ({
  userName: '',
  userPhoto: '',
  product: {
    name: '',
    topics: '',
    tecDetail: '',
    serviceDetail: ''
  }
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
  },
  setProductName(state, name) {
    state.product.name = name
  },
  setProductTopics(state, topics) {
    state.product.topics = topics
  },
  setProductTecDetail(state, tecDetail) {
    state.product.tecDetail = tecDetail
  },
  setProductServiceDetail(state, serviceDetail) {
    state.product.serviceDetail = serviceDetail
  },

  clearProduct(state) {
    state.product.name = ''
    state.product.topics = ''
    state.product.tecDetail = ''
    state.product.serviceDetail = ''
  }
}
export const actions = {
  async createuser({ commit }, payload) {
    const { uid, ...data } = payload
    await firebase.firestore().doc(`users/${uid}`).set(data)
    commit('setUserName', data.userName)
    commit('setUserPhoto', data.photoUrl)
  },
}
export const getters = {}
