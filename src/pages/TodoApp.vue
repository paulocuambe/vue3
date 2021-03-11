<template>
  <h1>Minha TodoList</h1>
  <form style="margin-bottom: 8px" @submit.prevent="addTodo()">
    <input id="text" v-model="text" type="text" name="text" />
    <button type="submit">Add</button>
  </form>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>

  <todo-list-item v-if="todoList.length > 0" :todos="todoList" @toggle-todo="toggleTodo" @delete-todo="deleteTodo" />
  <h2 v-else>No item in the list</h2>
</template>

<script>
import TodoListItem from "/@/components/todo/TodoListItem.vue";
import { ref } from "vue";

export default {
  components: { TodoListItem },
  setup() {
    const todoList = ref([
      { id: new Date().getTime(), text: "Learn Vue", completed: true },
      { id: new Date().getTime() + 1, text: "Learn React", completed: false },
      { id: new Date().getTime() + 2, text: "Learn Svelt", completed: false },
    ]);
    const text = ref("");
    const errorMessage = ref("");

    const addTodo = () => {
      if (text.value) {
        if (todoList.value.some((val) => val.text.toLowerCase() == text.value.toLowerCase())) {
          errorMessage.value = "That item is already on the list";
          return;
        }

        const newTodo = {
          id: new Date().getTime(),
          text: text.value,
          completed: false,
        };

        todoList.value.push(newTodo);
        text.value = "";
        errorMessage.value = "";
      } else {
        errorMessage.value = "The field must be filled.";
      }
    };

    const deleteTodo = (id) => {
      todoList.value = todoList.value.filter((item) => item.id !== id);
    };

    const toggleTodo = (id) => {
      todoList.value = todoList.value.map((item) => {
        if (item.id === id) {
          item.completed = item.completed ? false : true;
        }
        return item;
      });
    };

    return {
      text,
      todoList,
      errorMessage,
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
