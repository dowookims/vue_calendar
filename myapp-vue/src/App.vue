<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    const today = new Date();
    this.$store.commit("calendar/setToday", today);
    this.$store.commit("calendar/setBaseDay", today);
    this.$store.commit("calendar/setBaseFirstDay");
    this.$store.commit("calendar/setBaseLastDate");
    this.$store.commit("calendar/setBaseLastMonthDate");
    this.$store.commit("calendar/setSelectMonth", today.getMonth() + 1);
    this.$store.commit(
      "calendar/setSelectDate",
      this.$store.state["calendar"].baseDay.getDate()
    );
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
