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
  // today에서, 같은 일자면 다른 월에도 같이 표시되는거 수정해야 한다.
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
  box-sizing: border-box;
  min-width: 14.285714%;
  max-width: 14.285714%;
  height: 15vh;
  padding: 6px 0;
  border: 0.4px solid #eaeaea;
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
  border: 0.4px solid #0E28F7;
  span {
    display: inline-block;
    background-color: #0E28F7;
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