<template>
  <div class="side--div">
    <div class="side--div-year">
      <span class="year--button" @click="changeYear(-1)">&lt;</span>
      <span>{{ selectedYear }}</span>
      <span class="year--button" @click="changeYear(1)">&gt;</span>
    </div>
    <div
      class="side--div-month"
      v-for="(month, idx) in 12"
      :key="idx"
      @click="changeMonth(month)"
      :class="{ active: getMonth === month }"
    >
      <span>{{ englishMonth(idx) }}</span>
      <span>{{ getMonthTodoCount(month) }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("calendar", [
      "setBaseOtherDay",
      "setBaseFirstDay",
      "setBaseLastDate",
      "setBaseLastMonthDate",
      "setOtherYear",
      "setSelectMonth"
    ]),
    changeMonth(n) {
      this.setBaseOtherDay(n);
      this.setBaseFirstDay();
      this.setBaseLastDate();
      this.setBaseLastMonthDate();
    },
    changeYear(n) {
      this.setOtherYear(n);
      this.setBaseFirstDay();
      this.setBaseLastDate();
      this.setBaseLastMonthDate();
    },
    englishMonth(num) {
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
      return month[num];
    }
  },

  computed: {
    ...mapGetters("calendar", ["getToday", "getBaseDay", "getSelectMonth"]),
    ...mapGetters("todo", ["todos"]),
    selectedYear() {
      return this.getBaseDay.getFullYear() || this.getToday.getFullYear();
    },
    getMonth() {
      return this.getBaseDay
        ? this.getBaseDay.getMonth() + 1
        : this.getToday.getMonth() + 1;
    },
    getMonthTodoCount(m) {
      const num = parseInt(m);
      let todoCount = 0;
      for (let item in this.todos[num - 1]) {
        todoCount += 1;
      }
      return todoCount;
    }
  }
};
</script>

<style lang="scss" scoped>
.side--div {
  background-color: hsl(255, 38%, 61%);
  height: 100vh;
  color: #fff;
}
.side--div-year {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.active {
  background-color: #755eb5;
}

.year--button {
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
.side--div-month {
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
</style>
