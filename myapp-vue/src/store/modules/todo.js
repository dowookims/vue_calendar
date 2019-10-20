const state = {
  todos: [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
      20: [
        {
          id: 1,
          content: "bulabula",
          start: new Date("2019/10/20/00:00:00"),
          end: new Date("2019/10/20/23:59:59"),
          fin: false
        },
        {
          id: 2,
          content: "정수원 바보",
          start: new Date("2019/10/20/12:56:00"),
          end: new Date("2019/10/20/23:59:59"),
          fin: false
        }
      ]
    },
    {},
    {}
  ]
};

const getters = {
  todos: state => state.todos
};

const actions = {};


// mutation에서 default set으로 되어있는 값 말고 다른 날자에 새로운 거 추가시 에러가 나고 있음 !, 삽입하고 다른 컴포넌트 들어갔다 와야 동작하고, 삭제도 똑같이 작동됨.
const mutations = {
  addTodos: (state, payload) => {
    if (state.todos[payload.month][payload.date] !== undefined) {
      state.todos[payload.month][payload.date].push(payload.content);
    } else {
      state.todos[payload.month][payload.date] = [];
      state.todos[payload.month][payload.date] = [...state.todos[payload.month][payload.date], payload.content];
    }
  },
  updateTodos: (state, payload) => {
    state.todos[payload.month][payload.date][payload.idx] = payload.content;
  },
  deleteTodos: (state, payload) => {
    console.log("PAYLOAD", payload)
    state.todos[payload.month][payload.date] = state.todos[payload.month][payload.date]
      .slice(0, payload.idx)
      .concat(
        state.todos[payload.month][payload.date].slice(
          payload.idx + 1,
          state.todos[payload.month][payload.date].length
        )
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
