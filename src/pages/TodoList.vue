<template>
  <h1>Minha TodoList</h1>
  <form @submit.prevent="addTodo()">
    <input id="text" v-model="text" type="text" name="text" />
    <button type="submit">Add</button>
  </form>
  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  <ul v-if="todoList.length > 0">
    <li v-for="todo in todoList" :key="todo.id">
      <span :class="{ line: todo.completed }">
        <input type="checkbox" :value="todo.compltede" name="done" @click="toggle(todo.id)" />
        {{ todo.text }}
      </span>
      <button style="margin-left: 20px" @click.prevent="removeTodo(todo.id)">X</button>
    </li>
  </ul>
  <h2 v-else>No item in the list</h2>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const todoList = ref([]);
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

    const removeTodo = (id) => {
      todoList.value = todoList.value.filter((item) => id != item.id);
    };

    const toggle = (id) => {
      todoList.value = todoList.value.map((todo) => {
        if (todo.id == id) {
          todo.completed = todo.completed ? false : true;
        }
        return todo;
      });
    };

    return {
      text,
      todoList,
      errorMessage,
      addTodo,
      toggle,
      removeTodo,
    };
  },
};
</script>

<style scoped>
.line {
  text-decoration: line-through;
}
</style>
