<template>
  <div class="add-modal">
    <div class="modal-content">
      <div class="content-box">
        <div class="content-header">
          <div class="content-header-title">
            <p>해야 할 일을 입력하세요.</p>
          </div>
          <div class="exit-btn-div">
            <span @click="handleModal">&times;</span>
          </div>
        </div>
        <div class="content-body">
          <div class="content-body-text">
            <input type="text" name="todo" id="todo" v-model="inputText" />
          </div>
          <div class="content-body-date">
            <input type="date" ref="calendar" :value="calToday" />
          </div>
        </div>
        <div class="content-footer">
          <button class="add-todo-btn" @click="addTodo()" :disabled="todoLen">
            추가하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AddModal",
  data() {
    return {
      inputText: ""
    };
  },
  methods: {
    ...mapMutations("todo", ["handleModal", "addTodos"]),
    addTodo() {
      const addObj = {
        date: this.$refs.calendar.value,
        todo: this.inputText
      };
      this.addTodos(addObj);
      this.inputText = "";
      this.handleModal();
    }
  },
  computed: {
    ...mapState("calendar", ["today"]),
    calToday() {
      return `${this.today.getFullYear()}-${this.today.getMonth() +
        1}-${this.today.getDate()}`;
    },
    todoLen() {
      return this.inputText.length > 0 ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
.add-modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  .modal-content {
    height: 95vh;
    .content-box {
      width: 30vw;
      margin-left: 35vw;
      margin-top: 35vh;
      height: 30vh;
      background-color: #fff;
      border-radius: 10px;
      .content-header {
        position: relative;
        background-color: #ff6813;
        border-radius: 10px 10px 0 0;
        height: 50px;
        box-sizing: border-box;
        .content-header-title {
          display: inline-block;
          width: 80%;
          height: 100%;
          padding: 16px;
          p {
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-weight: 700;
          }
        }
        .exit-btn-div {
          width: 20%;
          height: 100%;
          display: inline-block;
          position: absolute;
          box-sizing: border-box;
          padding-top: 10px;
          padding-right: 10px;
          right: 0;
          color: #fff;
          text-align: right;
          span {
            cursor: pointer;
            font-size: 24px;
          }
        }
      }
      .content-body {
        height: calc(30vh - 100px);
        box-sizing: border-box;
        .content-body-text {
          box-sizing: border-box;
          height: 100px;
          padding-top: 30px;
          input {
            height: 30px;
            border: none;
            border-bottom: 1px solid #888;
            outline: none;
          }
        }
      }
      .content-footer {
        height: 50px;
        button {
          outline: none;
          border: none;
          background-color: #ff6813;
          color: #fff;
          padding: 5px 15px;
          border-radius: 5px;
          letter-spacing: 1.6px;
          font-weight: 700;
          &:hover {
            background-color: #dd6813;
          }
          &:disabled,
          &[disabled] {
            background-color: #aaa;
          }
        }
      }
    }
  }
}
</style>
