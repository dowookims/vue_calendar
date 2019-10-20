<template>
  <div class="todo--div">
    <p>TODO LIST</p>
    {{ getThisMonthTodos[0].id }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('calendar', ["baseDay"]),
    ...mapGetters('todo', ["todos"]),
    getThisMonthTodos(){
      return this.todos[this.baseDay.getMonth()]
    }
  }
}
</script>
<style lang="scss" scoped>
  .todo--div {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 24px;
      font-weight: 600;
      color: #0e28f7;
    }
  }
</style>
