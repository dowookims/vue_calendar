<template>
  <div class="days--container">
    <div class="days--text" v-for="(day, idx) in days" :key="idx">
      {{ day }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Days",
  data() {
    return {
      days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    };
  }
};
</script>

<style lang="scss">
.days--container {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.days--text {
  box-sizing: border-box;
  padding: 6px 0;
  font-weight: 600;
  border-right: 0.4px solid #efefef;
  border-left: 0.4px solid #efefef;
  background-color: #bbb;
  width: 14.285714%;
  width: 14.285714%;
  color: #fff;
}
</style>
