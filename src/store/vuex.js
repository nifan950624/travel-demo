import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

let defaultCity = '北京'
try {
  if (localStorage.city){
    defaultCity = localStorage.city
  }
}catch(e){}

export default 
  new vuex.Store({
    state: {
      city: defaultCity
    },
    mutations: {
      change(state,city) {
        state.city = city
        localStorage.city = state.city 
      }
    }
  })