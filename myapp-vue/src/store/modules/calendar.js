const state = {
  today: "",
  baseDay: "",
  baseFirstDay: "",
  baseLastDate: "",
  baseLastMonthDate: "",
  selectDate: "",
  selectMonth: ""
};

const getters = {
  getToday: state => state.today,
  getBaseDay: state => state.baseDay,
  getBaseFirstDay: state => state.baseFirstDay,
  getBaseLastDate: state => state.baseLastDate,
  getBaseLastMonthDate: state => state.baseLastMonthDate,
  getSelectMonth: state => state.selectMonth
};

const actions = {};

const mutations = {
  setToday: state => (state.today = new Date()),
  setBaseDay: state => (state.baseDay = new Date()),
  setBaseOtherDay: (state, payload) => {
    state.baseDay = new Date(state.baseDay.getFullYear(), payload, 0);
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
    const d = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth() + 1,
      0
    );
    state.baseLastDate = d.getDate();
  },
  setBaseLastMonthDate: state => {
    const lastMonthLastDay = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth(),
      0
    );
    state.baseLastMonthDate = lastMonthLastDay.getDate();
  },
  setSelectMonth: (state, payload) => {
    state.baseDay = new Date(state.baseDay.getFullYear(), payload, 0);
  },
  setMonth: (state, payload) => {
    state.baseDay = new Date(
      state.baseDay.getFullYear(),
      state.baseDay.getMonth() + payload,
      1
    );
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
