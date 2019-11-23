<template>
  <header class="header">
    <div class="calendar-info">
      <span class="year--button" @click="addMonth(-1)">&lt;</span>
      <span>{{ getYear }}.</span>
      <span>{{ getMonth }}</span>
      <span class="year--button" @click="addMonth(1)">&gt;</span>
    </div>
    <div class="calendar-button-div">
      <button class="add-todo" @click="handleModal">추가하기</button>
    </div>
    <AddModal v-show="open" />
  </header>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import AddModal from "./AddModal";
export default {
  components: {
    AddModal
  },
  computed: {
    ...mapState("todo", ["open"]),
    ...mapGetters("calendar", ["getToday", "getBaseDay"]),
    ...mapGetters("todo", ["todos"]),
    getYear() {
      return this.getBaseDay
        ? this.getBaseDay.getFullYear()
        : this.getToday.getFullYear();
    },
    getMonth() {
      return this.getBaseDay
        ? this.getBaseDay.getMonth() + 1
        : this.getToday.getMonth() + 1;
    }
  },
  methods: {
    ...mapMutations("calendar", [
      "setBaseFirstDay",
      "setBaseLastDate",
      "setBaseLastMonthDate",
      "setOtherYear",
      "setSelectMonth",
      "setMonth"
    ]),
    ...mapMutations("todo", ["handleModal"]),
    addMonth(n) {
      this.setMonth(n);
      this.setBaseFirstDay();
      this.setBaseLastDate();
      this.setBaseLastMonthDate();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 10vh;
  .calendar-info,
  .calendar-button-div {
    box-sizing: border-box;
    height: 4vh;
    margin-top: 3vh;
  }
  .calendar-info {
    display: inline-block;
    width: 80%;
    padding-left: 10vw;
    span {
      font-size: 30px;
      font-weight: 700;
      color: #999;
      &:nth-child(2),
      &:nth-child(3) {
        color: #ff6813;
      }
    }
  }
  .calendar-button-div {
    display: inline-block;
    position: relative;
    width: 20%;
    .add-todo {
      position: absolute;
      right: 0;
      width: 80px;
      height: 40px;
      background-color: #ff6813;
      color: #fff;
      font-weight: 700;
      border-radius: 5px;
      border: none;
      outline: none;
      margin-left: calc(20vw-80px);
      &:hover {
        background-color: #ee6813;
      }
    }
  }
}

.year--button {
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
}
</style>
