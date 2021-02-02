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
export const actions = {}
export const getters = {}
