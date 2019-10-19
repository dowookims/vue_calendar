<template>
  <header class="header__container">
    <div class="header__text-today">
      <p>Today</p>
      <p>
        <span>{{ this.showDetailDate }}</span>
        <span>{{ this.showDate }}일</span>
        <span>{{ this.showKoreanDate }}요일</span>
      </p>
    </div>
    <div class="header__text-currentMonth">
      <button @click="changeMonth(-1)">&lt;</button>
      <span>{{ englishMonth }}</span>
      <span>{{ selectedYear }}</span>
      
      <button @click="changeMonth(1)">&gt;</button>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapMutations("calendar",
      [
        "setBaseOtherDay",
        "setBaseFirstDay",
        "setBaseLastDate",
        "setBaseLastMonthDate"
      ]
    ),
    // 나중에 연도 변할시 값 이상하게 변하는거 이유 확인 및 체크할 것
    changeMonth(n){
      this.setBaseOtherDay(n);
      this.setBaseFirstDay();
      this.setBaseLastDate();
      this.setBaseLastMonthDate();
    }
  },
  computed: {
    ...mapGetters("calendar", ["today", "baseDay"]),
    showDate(){
      return this.today.getDate()
    },
    showDetailDate(){
      return `${this.today.getFullYear()}년 ${this.today.getMonth()+1}월`
    },
    showKoreanDate(){
      const dayArr = ["일", "월", "화", "수", "목", "금", "토"]
      return dayArr[this.today.getDay()]
    },
    selectedYear(){
      return this.baseDay.getFullYear() | this.today.getFullYear()
    },
    selectedMonth(){
      return this.baseDay.getMonth() ? this.baseDay.getMonth()+1 : this.today.getMonth()+1
    },
    englishMonth(){
      const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      return this.baseDay.getMonth() ? month[this.baseDay.getMonth()] : month[this.today.getMonth()]
    }
  }
}

</script>

<style lang="scss" scoped>
.header__container {
  display: flex;
  align-items: center;
  height: 15vh;
  background-color: #0E28F7;
  color: #fff;
}

.header__text-today {
  box-sizing: border-box;
  width: 200px;
  padding-left: 20px;
  p {
    text-align: left;
    margin-bottom: 15px;
    &:first-child {
      font-weight: 700;
      font-size: 24px;
    }
    span + span {
      margin-left: 6px;
    }
  }
}

.header__text-currentMonth {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -200px;
  button {
    outline: none;
    border: none;
    background-color: #0E28F7;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }
  span {
    font-size: 24px;
    font-weight: 700;
  }
  span + span {
    margin-left: 15px;
  }
}

</style>