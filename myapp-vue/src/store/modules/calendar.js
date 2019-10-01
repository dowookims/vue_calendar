const state = {
  today: "",
  year: 2019,
  month: 10,
  date: 1,
  day: 2,
  pinDay: ''
};

const getters = {
  today: state => state.today
};

const actions = {};

const mutations = {
  setToday: state => (state.today = new Date()),
  setOtherDay: (state, payload) => 
    ( state.today = new Date(state.today.getFullYear(), state.today.getMonth()+payload) )

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
