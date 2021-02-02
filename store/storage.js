import firebase from '~/plugins/firebase'

export const state = () => ({})
export const mutations = {}
export const actions = {
  async avatarUpload({ commit }, payload) {
    console.log(payload.file.name)
    const imageRef = firebase.storage()
      .ref()
      .child(`avatar/${payload.uid}/${payload.file.name}`)

    await imageRef.put(payload.file)
    const url = await imageRef.getDownloadURL()

    return url
  }
}
export const getters = {}
