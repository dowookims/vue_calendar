<template>
  <div class="date--container">
    <div class="date--container-week" v-for="week in calWeeks" :key="week">
      <DateItem 
        v-for="idx in 7" 
        :key="idx"
        :idx="idx"
        :week="week"
      /> 
    </div>
  </div>
</template>

<script>
  import DateItem from "./DateItem"
  import { mapState, mapGetters, mapMutations } from "vuex";
  export default {
    name: "Dates",
    components: { DateItem },
    computed: {
      calWeeks(){
        return parseInt( this.baseLastDate / 7 )+1
      },
      ...mapState("calendar", ["today", "baseDay", "baseLastDate"]),
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

</style>