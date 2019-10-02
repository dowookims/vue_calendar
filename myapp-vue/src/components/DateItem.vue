<template>
  <div 
  class="date--container-date"
  :class="{ today : isToday & !notThisMonth, last : notThisMonth }">
    <span>{{ getNum }} </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DateItem",
  props: ["week", "idx"],
  computed: {
    ...mapGetters("calendar", ["today", "baseDay", "baseFirstDay", "baseLastDate", "baseLastMonthDate"]),
    getNum(){
      return (
        this.idx + ((this.week-1) * 7) > this.baseFirstDay
        ? this.idx + ((this.week-1) * 7) - this.baseFirstDay < this.baseLastDate +1
          ? this.idx + ((this.week-1) * 7) - this.baseFirstDay
          : this.idx + ((this.week-1) * 7) - this.baseFirstDay - this.baseLastDate
        : this.baseLastMonthDate - this.baseFirstDay + this.idx
      )
    },
    isToday(){
      return this.today.getDate() === this.getNum;
    },
    notThisMonth(){
      if (this.idx + ((this.week -1) * 7) < this.baseFirstDay + 1 ){
        return true;
      } else if(this.idx + ((this.week -1) * 7) > this.baseLastDate + this.baseFirstDay) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.date--container-date {
  min-width: 14.285714%;
  max-width: 14.285714%;
  height: 15vh;
  padding: 6px 0;
  border: 0.4px solid #aaa;
  &:first-child {
    color: red;
  }
  &:last-child {
    color: royalblue;
  }
}

.today {
  border: 0.4px solid #333;
  background-color: #eee;
}

.last {
  background-color: #aaa;
}
</style>