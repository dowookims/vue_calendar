<template>
  <header class="header">
    <span class="year--button" @click="addMonth(-1)">&lt;</span>
    <span>{{ getYear }}.</span>
    <span>{{ getMonth }}</span>
    <span class="year--button" @click="addMonth(1)">&gt;</span>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("calendar", ["getToday", "getBaseDay"]),
    ...mapGetters("todo", ["todos"]),
    getYear() {
      return this.getBaseDay
        ? this.getBaseDay.getFullYear()
        : this.getToday.getFullYear();
    },
    getMonth() {
      return this.getBaseDay
        ? this.getBaseDay.getMonth() + 1
        : this.getToday.getMonth() + 1;
    }
  },
  methods: {
    ...mapMutations("calendar", [
      "setBaseFirstDay",
      "setBaseLastDate",
      "setBaseLastMonthDate",
      "setOtherYear",
      "setSelectMonth",
      "setMonth"
    ]),
    addMonth(n) {
      this.setMonth(n);
      this.setBaseFirstDay();
      this.setBaseLastDate();
      this.setBaseLastMonthDate();
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
    color: #999;
    &:nth-child(2),
    &:nth-child(3) {
      color: #ff6813;
    }
  }
}

.year--button {
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
</style>
