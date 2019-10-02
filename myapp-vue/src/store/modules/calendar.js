const state = {
  today: "",
  baseDay: "",
  baseFirstDay: "",
  baseLastDate: "",
  baseLastMonthDate: ""
};

const getters = {
  today: state => state.today,
  baseDay: state => state.baseDay,
  baseFirstDay: state => state.baseFirstDay,
  baseLastDate: state => state.baseLastDate,
  baseLastMonthDate: state => state.baseLastMonthDate
};

const actions = {};

const mutations = {
  setToday: state => (state.today = new Date()),
  setBaseDay: state => (state.baseDay = new Date()),
  setBaseOtherDay: (state, payload) => {
    state.baseDay = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth() + payload
    );
  },
  setBaseFirstDay: state => {
    const monthFirst = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth(),
      1
    );
    state.baseFirstDay = monthFirst.getDay();
  },
  setBaseLastDate: state => {
    const lastDate = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth() + 1,
      0
    );
    state.baseLastDate = lastDate.getDate();
  },
  setBaseLastMonthDate: state => {
    const lastMonthLastDay = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth(),
      0
    );
    state.baseLastMonthDate = lastMonthLastDay.getDate();
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
