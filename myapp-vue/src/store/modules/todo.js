const state = {
  open: false,
  todos: []
};

const getters = {
  todos: state => state.todos
};

const actions = {};

// mutation에서 default set으로 되어있는 값 말고 다른 날자에 새로운 거 추가시 에러가 나고 있음 !, 삽입하고 다른 컴포넌트 들어갔다 와야 동작하고, 삭제도 똑같이 작동됨.

// 2018, 2019, 2020
const mutations = {
  addTodos: (state, payload) => {
    state.todos.push(payload);
  },
  handleModal: state => {
    state.open = !state.open;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
