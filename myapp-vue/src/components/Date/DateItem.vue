<template>
  <div
    class="date--container-date"
    :class="{ today: isToday && !notThisMonth, last: notThisMonth }"
  >
    <div>
      <span @click="handleClick">{{ getNum }}</span>
    </div>
    <div class="date--todo">
      <p v-for="(item, idx) in todayTodo" :key="idx">
        {{ item.todo }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DateItem",
  props: ["week", "idx"],
  computed: {
    ...mapState("calendar", [
      "today",
      "baseDay",
      "baseFirstDay",
      "baseLastDate",
      "baseLastMonthDate",
      "selectDate"
    ]),
    ...mapState("todo", ["todos"]),
    getNum() {
      return this.idx + (this.week - 1) * 7 > this.baseFirstDay
        ? this.idx + (this.week - 1) * 7 - this.baseFirstDay <=
          this.baseLastDate
          ? this.idx + (this.week - 1) * 7 - this.baseFirstDay
          : this.idx +
            (this.week - 1) * 7 -
            this.baseFirstDay -
            this.baseLastDate
        : this.baseLastMonthDate - this.baseFirstDay + this.idx;
    },
    isToday() {
      return (
        this.today.getDate() === this.getNum &&
        this.today.getMonth() === this.baseDay.getMonth() &&
        this.today.getFullYear() === this.baseDay.getFullYear()
      );
    },
    notThisMonth() {
      if (this.idx + (this.week - 1) * 7 <= this.baseFirstDay) {
        return true;
      } else if (
        this.idx + (this.week - 1) * 7 >
        this.baseLastDate + this.baseFirstDay
      ) {
        return true;
      } else {
        return false;
      }
    },
    isSelected() {
      return this.getNum;
    },
    todayTodo() {
      const arr = this.todos.filter(todo => {
        const d = new Date(todo.date);
        return (
          d.getDate() === this.getNum &&
          d.getMonth() === this.baseDay.getMonth() &&
          d.getFullYear() === this.baseDay.getFullYear()
        );
      });
      return arr;
    }
  },
  methods: {
    handleClick() {
      alert(
        `오늘 ${this.getNum}일에 해야 할 일은  ${this.todayTodo.map(
          v => v.todo
        )} 입니다.`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.date--container-date {
  box-sizing: border-box;
  min-width: 14.285714%;
  max-width: 14.285714%;
  height: 100%;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  div:first-child {
    text-align: center;
    height: 20px;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
    color: #777;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
  div:last-child {
    background-color: #fff;
    p {
      margin-top: 5px;
    }
  }
}

.today {
  box-sizing: border-box;
  border: 2px solid #ff6813;
  span {
    color: #ff6813;
    cursor: pointer;
  }
}

.last {
  background-color: #f9f9f9;
}
</style>
