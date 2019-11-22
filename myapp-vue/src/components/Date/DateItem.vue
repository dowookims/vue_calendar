<template>
  <div
    class="date--container-date"
    :class="{ today: isToday && !notThisMonth, last: notThisMonth }"
    @click="handleClick(getNum)"
  >
    <div>
      <span>{{ getNum }}</span>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DateItem",
  props: ["week", "idx"],
  methods: {
    handleClick(n) {
      const param = {
        day: n,
        thisMonth: !this.notThisMonth
      };
      this.$store.commit("calendar/setSelectDate", param);
    }
  },
  computed: {
    ...mapState("calendar", [
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
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  div:first-child {
    text-align: center;
    height: 20px;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    color: #777;
    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
  div:last-child {
    background-color: #fff;
  }
}

.today {
  box-sizing: border-box;
  border: 2px solid #ff6813;
  span {
    color: #ff6813;
  }
}

.last {
  background-color: #f9f9f9;
}
</style>
