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
        start: "",
        end: "",
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
