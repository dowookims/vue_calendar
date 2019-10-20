const state = {
  todos: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [
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
    ],
    [],
    []
  ]
};

const getters = {
  todos: state => state.todos
};

const actions = {};

const mutations = {
  addTodos: (state, payload) => {
    state.todos[payload.month].push(payload.todo);
  },
  updateTodos: (state, payload) => {
    state.todos[payload.month].payload.todo.id = payload.todo;
  },
  deleteTodos: (state, payload) => {
    state.todos = state.todos[payload.month].slice(0, payload.todo.id).concat(state.todos[payload.month].slice(payload.todo.id+1, state.todos[payload.month].length));
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
