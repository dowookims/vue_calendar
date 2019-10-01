<template>
  <div class="date--container">
    <div class="date--container-week" v-for="week in calWeeks" :key="week">
      <div class="date--container-date" v-for="idx in 7" :key="idx"> 
        {{ getNum(idx, week) }} </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Dates",
    methods:{
      getNum(idx, week){
        return (
          idx + ((week-1) * 7) > this.getDays
          ? idx + ((week-1) * 7) - this.getDays < this.monthLast +1
            ? idx + ((week-1) * 7) - this.getDays
            : idx + ((week-1) * 7) - this.getDays - this.monthLast
          : this.getLastMonthDays - this.getDays + idx
        )
      }
    },
    computed: {
      monthFirst(){
        const today = new Date();
        const monthFirst = new Date(today.getFullYear(), today.getMonth(), 1)
        return monthFirst.getDate()
      },
      monthLast(){
        const today = new Date();
        const monthLast = new Date(today.getFullYear(), today.getMonth(), 0)
        return monthLast.getDate()
      },
      getDays(){
        const today = new Date();
        const monthFirst = new Date(today.getFullYear(), today.getMonth(), 1)
        return monthFirst.getDay()
      },
      getLastMonthDays(){
        const today = new Date();
        const lastMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0)
        return lastMonthLastDay.getDate()
      },
      calWeeks(){
        return parseInt( this.monthLast / 7 )+1
      }
    }
  }
</script>
<style lang="scss" scoped>
.date--container-week {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  overflow: visible;
}
.date--container-date {
  min-width: 14.285714%;
  max-width: 14.285714%;
  height: 15vh;
  padding: 6px 0;
  border: 0.4px solid #111;
}
</style>