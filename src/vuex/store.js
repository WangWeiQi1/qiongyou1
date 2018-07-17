import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const state={
  title:"登录",
  color:"#000000",
}
const mutations={
  routerLink(state,params){
    state.title=params.title;
    state.color=params.color;
 }
}
export default  new Vuex.Store({
  state,
  mutations
})

