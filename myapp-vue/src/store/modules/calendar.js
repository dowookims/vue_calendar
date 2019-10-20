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
    if (state.baseDay.getMonth() + payload === 12) {
      state.baseDay = new Date(
        `${state.baseDay.getFullYear() + 1}/01/01/0:0:0`
      );
    } else if (state.baseDay.getMonth() + payload === -1) {
      state.baseDay = new Date(
        `${state.baseDay.getFullYear() - 1}/12/01/0:0:0`
      );
    } else {
      state.baseDay = new Date(
        state.baseDay.getFullYear(),
        state.baseDay.getMonth() + payload + 1,
        0
      );
    }
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
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
