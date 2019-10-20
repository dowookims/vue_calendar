<template>
  <div
    class="date--container-date"
    :class="{ today: isToday && !notThisMonth, last: notThisMonth }"
    @click="handleClick(getNum)"
  >
    <span>{{ getNum }} </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DateItem",
  props: ["week", "idx"],
  methods: {
    handleClick(n) {
      this.$store.commit("calendar/setSelectDate", n);
    }
  },
  computed: {
    ...mapGetters("calendar", [
      "today",
      "baseDay",
      "baseFirstDay",
      "baseLastDate",
      "baseLastMonthDate",
      "selectDate"
    ]),
    getNum() {
      return this.idx + (this.week - 1) * 7 > this.baseFirstDay
        ? this.idx + (this.week - 1) * 7 - this.baseFirstDay <=
          this.baseLastDate
          ? this.idx + (this.week - 1) * 7 - this.baseFirstDay
          : this.idx +
            (this.week - 1) * 7 -
            this.baseFirstDay -
            this.baseLastDate
        : this.baseLastMonthDate - this.baseFirstDay + this.idx;
    },
    isToday() {
      return (
        this.selectDate.getDate() === this.getNum &&
        this.selectDate.getMonth() === this.baseDay.getMonth() &&
        this.selectDate.getFullYear() === this.baseDay.getFullYear()
      );
    },
    notThisMonth() {
      if (this.idx + (this.week - 1) * 7 <= this.baseFirstDay) {
        return true;
      } else if (
        this.idx + (this.week - 1) * 7 >
        this.baseLastDate + this.baseFirstDay
      ) {
        return true;
      } else {
        return false;
      }
    },
    isSelected() {
      return this.getNum;
    }
  }
};
</script>

<style lang="scss" scoped>
.date--container-date {
  box-sizing: border-box;
  min-width: 14.285714%;
  max-width: 14.285714%;
  height: 100%;
  padding: 6px 0;
  border: 0.4px solid #eaeaea;
  cursor: pointer;
  span {
    font-weight: 700;
  }
  &:first-child {
    color: red;
  }
  &:last-child {
    color: royalblue;
  }
}

.today {
  border: 0.4px solid #0e28f7;
  span {
    display: inline-block;
    background-color: #0e28f7;
    padding: 2px;
    width: 20px;
    height: 20px;
    color: #fff;
    border-radius: 50%;
  }
}

.last {
  background-color: #f9f9f9;
}
</style>
