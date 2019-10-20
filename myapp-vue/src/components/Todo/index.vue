<template>
  <div>
    <TodoHeader />
    <TodoContent />
  </div>
</template>

<script>
import TodoHeader from "./TodoHeader";
import TodoContent from "./TodoContent";
export default {
  components: {
    TodoHeader,
    TodoContent
  }
};
</script>

<style lang="scss" scoped></style>
