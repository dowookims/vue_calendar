<template>
  <div class="calendar">
    <div class="side">

    </div>
    <div class="home">
      <Header />
      <Days />
      <Dates />
    </div>
    <div class="todo">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Days from "@/components/Days";
import Dates from "@/components/Dates";
export default {
  name: "home",
  components: {
    Header, Days, Dates
  }
};
</script>

<style lang="scss" scoped>
  .calendar {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
  .side {
    width: 15vw;
  }
  .home {
    width: 60vw;
  }
  .todo {
    width: 25vw;
  }
</style>
