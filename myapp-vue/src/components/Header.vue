<template>
  <header class="header__container">
    <div class="header__text-today">
      <p>{{ this.showDetailDate }}</p>
      <p>{{ this.showDate }}일</p>
    </div>
    <div class="header__text-day--info">
      <p>{{ this.showKoreanDate }}요일</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data(){
      return {
      }
    },
    computed: {
      showDate(){
        const today = new Date()
        return today.getDate()
      },
      showDetailDate(){
        const today = new Date()
        return `${today.getFullYear()}년 ${today.getMonth()+1}월`
      },
      showKoreanDate(){
        const today = new Date()
        const dayArr = ["일", "월", "화", "수", "목", "금", "토"]
        return dayArr[today.getDay()]
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