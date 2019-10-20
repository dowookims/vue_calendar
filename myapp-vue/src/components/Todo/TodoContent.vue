<template>
  <section>
    <article
      v-for="todo in getThisMonthTodos"
      :key="todo.content + todo.id"
    >
      {{ getTextTodo(todo)}}
      {{ todo.content }}
    </article>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    getTextTodo(todo) {
      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return `${todo.start.getHours()}:${todo.start.getMinutes()}`
    }
  },
  computed: {
    ...mapGetters('calendar', ["baseDay"]),
    ...mapGetters('todo', ["todos"]),
    getThisMonthTodos(){
      return this.todos[this.baseDay.getMonth()]
    },
  }
}
</script>

<style lang="scss" scoped>

</style>