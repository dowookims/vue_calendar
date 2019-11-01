<template>
  <header class="header">
    <span>{{ getYear }}.</span>
    <span>{{ getMonth }}</span>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("calendar", ["today", "baseDay"]),
    ...mapGetters("todo", ["todos"]),
    getYear() {
      return this.baseDay
        ? this.baseDay.getFullYear()
        : this.today.getFullYear();
    },
    getMonth() {
      return this.baseDay
        ? this.baseDay.getMonth() + 1
        : this.today.getMonth() + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 30px;
    font-weight: 700;
    margin-right: 20px;
  }
}
</style>
