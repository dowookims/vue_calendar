import Vue from "vue";
import Vuex from "vuex";
import calendar from "./modules/calendar";
import todo from "./modules/todo";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    calendar,
    todo
  }
});