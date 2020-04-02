import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content: [
      {
        type: "text",
        style: "title",
        content: "Nothing is true"
      }, {
        type: "text",
        style: "normal",
        content: "To say that nothing is true, is to realise that the foundations of society are fragile, and that we must be the shepherds of our own civilization. To say that everything is permitted. Is to understand that we are the architects of our actions, and that we must live with their consequences, whether glorious or tragic."
      }, {
        type: "media",
        style: "image",
        content: "https://i.ibb.co/MnwBLyV/i-wanna-live.png"
      }
    ]
  },
  mutations: {
    setContent() {
      console.log("content changed")
    }
  },
  actions: {
    setContent(context) {
      context.commit('setContent')
    }
  },
  modules: {
  }
})
