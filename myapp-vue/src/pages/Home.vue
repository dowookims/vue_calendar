<template>
  <div class="calendar">
    <div class="home">
      <Header />
      <Days />
      <Dates />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Days from "@/components/Date/Days";
import Dates from "@/components/Date/Dates";
export default {
  name: "home",
  components: {
    Header,
    Days,
    Dates
  }
};
</script>

<style lang="scss" scoped>
.calendar {
  width: 100vw;
  min-height: 100vh;
  display: flex;
}

.home {
  width: 80%;
  margin-left: 10%;
  overflow-y: auto;
}
</style>
