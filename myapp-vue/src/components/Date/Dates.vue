<template>
  <div class="date--container">
    <div
      class="date--container-week"
      v-for="week in calWeeks"
      :key="week"
      :style="{ height: 'calc((85vh - 30px)/' + calWeeks + ')' }"
    >
      <DateItem v-for="idx in 7" :key="idx" :idx="idx" :week="week" />
    </div>
  </div>
</template>

<script>
import DateItem from "./DateItem";
import { mapState } from "vuex";
export default {
  name: "Dates",
  components: { DateItem },
  computed: {
    ...mapState("calendar", ["today", "baseDay", "baseLastDate"]),
    calWeeks() {
      const w = parseInt(this.baseLastDate / 7) + 1;
      const firstDay = new Date(
        this.baseDay.getFullYear(),
        this.baseDay.getMonth(),
        1
      );
      if (w * 7 >= this.baseLastDate + firstDay.getDay()) {
        return w;
      } else {
        return w + 1;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.date--container-week {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  overflow: visible;
}
</style>
