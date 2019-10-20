<template>
  <section>
    <article v-for="(todo, idx) in getSelectDatetodo" :key="todo.content + todo.id + idx">
      <p>
        <span>{{ getTextTodo(todo) }}</span>
        <span>{{ todo.content }}</span>
        <span @click="handleUpdate(idx)">수정</span>
        <span @click="handleRemove(idx)">삭제</span>
      </p>
    </article>
    <input type="text" v-model="todoText"/>
    <button @click="handleClick">추가</button>
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data(){
    return {
      todoText: ''
    }
  },
  methods: {
    ...mapMutations("todo", ["addTodos"]),
    handleClick(){
      const id_date = new Date()
      const payload = {
        month: this.selectDate.getMonth(),
        date: this.selectDate.getDate(),
        content: {
          id: id_date.toString(),
          content: this.todoText,
          start: id_date,
          end: id_date,
          fin: false
        }
      }
      this.$store.commit("todo/addTodos", payload)
      this.todoText = ''
    },
    handleRemove(idx){
      const payload = {
        month: this.selectDate.getMonth(),
        date: this.selectDate.getDate(),
        idx
      }
      this.$store.commit("todo/deleteTodos", payload)
    },
    handleUpdate(idx){
      const id_date = new Date()
      const payload = {
        month: this.selectDate.getMonth(),
        date: this.selectDate.getDate(),
        idx,
        content: {
          id: id_date.toString(),
          content: this.todoText,
          start: id_date,
          end: id_date,
          fin: false
        }
      }
      this.$store.commit("todo/updateTodos", payload)
      this.todoText=''
    },
    getTextTodo(todo) {
      return `${todo.start.getHours()}:${todo.start.getMinutes()}`;
    },
    
  },
  computed: {
    ...mapGetters("calendar", ["baseDay", "selectDate"]),
    ...mapGetters("todo", ["todos"]),
    getSelectDatetodo() {
      return this.todos[this.selectDate.getMonth()][this.selectDate.getDate()];
    }
  }
};
</script>

<style lang="scss" scoped></style>
