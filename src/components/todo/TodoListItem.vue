<template>
  <todo-item
    v-for="todo in todoItems"
    :key="todo.id"
    :todo="todo"
    @toggle="toggle(todo.id)"
    @delete-todo="deleteTodo(todo.id)"
  />
</template>

<script>
import { toRefs } from "vue";
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },

  emits: ["delete-todo", "toggle-todo"],

  setup(props, context) {
    const { todos: todoItems } = toRefs(props);

    const deleteTodo = (id) => {
      context.emit("delete-todo", id);
    };

    const toggle = (id) => {
      context.emit("toggle-todo", id);
    };

    return {
      todoItems,
      deleteTodo,
      toggle,
    };
  },
};
</script>
