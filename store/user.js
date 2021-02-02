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

  async getUserData({ commit }, uid) {
    const doc = await firebase.firestore().doc(`users/${uid}`).get()
    const userData = doc.data()

    commit('setUserName', userData.userName)
    commit('setUserPhoto', userData.photoUrl)
    commit('setProductName', userData.productName)
    commit('setProductTopics', userData.productTopics)
    commit('setProductTecDetail', userData.productTecDetail)
    commit('setProductServiceDetail', userData.productServiceDetail)
  },

  updateProduct({ state }, uid) {
    firebase.firestore().doc(`users/${uid}`).update({
      productName: state.product.name,
      productTopics: state.product.topics,
      productTecDetail: state.product.tecDetail,
      productServiceDetail: state.product.serviceDetail
    })
  },
}
export const getters = {}
