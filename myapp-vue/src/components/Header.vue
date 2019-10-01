<template>
  <header class="header__container">
    <div class="header__text-today">
      <p>{{ this.showDetailDate }}</p>
      <p>{{ this.showDate }}일</p>
    </div>
    <div class="header__text-day--info">
      <p>{{ this.showKoreanDate }}요일</p>
      <button @click="setOtherDay(1)">+</button>
      <button @click="setOtherDay(-1)">-</button>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex"
  export default {
    name: 'Header',
    data(){
      return {
      }
    },
    methods: {
      ...mapMutations("calendar", ["setOtherDay"])
    },
    computed: {
      ...mapGetters("calendar", ["today"]),
      showDate(){
        return this.today.getDate()
      },
      showDetailDate(){
        return `${this.today.getFullYear()}년 ${this.today.getMonth()+1}월`
      },
      showKoreanDate(){
        const dayArr = ["일", "월", "화", "수", "목", "금", "토"]
        return dayArr[this.today.getDay()]
      }
    }
  }

</script>

<style lang="scss" scoped>
.header__container {
  height: 20vh;
  background-color: red;

  display: flex;
}

</style>