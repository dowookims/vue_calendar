<template>
  <div class="days--container">
    <div 
      class="days--text"
      v-for="(day, idx) in days"
      :key="idx"
    >
      {{ day }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Days",
    data(){
      return {
        days : ["일", "월", "화", "수", "목", "금", "토"]
      }
    }
  }
</script>

<style lang="scss">
.days--container {
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.days--text {
  padding: 6px 0;
  font-weight: 600;
  border-right: 0.4px solid #999;
  border-left: 0.4px solid #999;
  background-color: #BBB;
  min-width: 14.285714%;
  max-width: 14.285714%;
  &:first-child {
    color: red;
  }
  &:last-child {
    color: royalblue;
  }
}
</style>