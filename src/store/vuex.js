import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default 
  new vuex.Store({
    state: {
      city: '北京'
    },
    mutations: {
      change(state,city) {
        this.state.city = city
      }
    }
  })