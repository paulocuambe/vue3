<template>
  <h1>Minha TodoList</h1>

  <form @submit.prevent="addTodo()">
    <input v-model="text" type="text" style="margin: 0 8px 8px 0" />
    <button type="submit">Add</button>
  </form>

  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>

  <todo-list-item v-if="todoList.length > 0" :todos="todoList" @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
  <h2 v-else>No item in the list</h2>
</template>

<script>
import TodoListItem from "/@/components/todo/TodoListItem.vue";
import { reactive, toRefs } from "vue";

export default {
  components: { TodoListItem },
  setup() {
    const state = reactive({
      errorMessage: "",
      text: "",
      todoList: [
        { id: new Date().getTime(), text: "Learn Vue", completed: true },
        { id: new Date().getTime() + 1, text: "Learn React", completed: false },
        { id: new Date().getTime() + 2, text: "Learn Svelt", completed: false },
      ],
    });

    const textIsValid = () => {
      if (state.text) {
        if (state.todoList.some((todo) => todo.text.toLowerCase() === state.text.toLowerCase())) {
          state.errorMessage = "That item is already on the list.";
          return false;
        }
        return true;
      } else {
        state.errorMessage = "The field must be filled.";
        return false;
      }
    };

    const addTodo = () => {
      if (textIsValid()) {
        const newTodo = {
          id: new Date().getTime(),
          text: state.text,
          completed: false,
        };

        state.todoList.push(newTodo);
        state.text = "";
        state.errorMessage = "";
      }
    };

    const deleteTodo = (id) => {
      state.todoList = state.todoList.filter((item) => item.id !== id);
    };

    const toggleTodo = (id) => {
      state.todoList = state.todoList.map((item) => {
        if (item.id === id) {
          item.completed = item.completed ? false : true;
        }
        return item;
      });
    };

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      toggleTodo,
    };
  },
};
</script>

<style scoped>
.line {
  text-decoration: line-through;
}
</style>
