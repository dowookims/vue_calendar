<template>
  <div class="home">
    <Header />
    <Days />
    <Dates />
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
