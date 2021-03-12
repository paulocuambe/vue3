<template>
  <div style="display: flex; margin-bottom: 8px">
    <input v-model="todoItem.completed" type="checkbox" @click="toggle" />
    <span :class="{ line: todo.completed }">{{ todoItem.text }} </span>
    <button style="margin-left: 8px" @click="deleteTodo">Delete</button>
  </div>
</template>

<script>
import { toRefs } from "vue";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  emits: ["delete-todo", "toggle"],

  setup(props, context) {
    const { todo: todoItem } = toRefs(props);

    const deleteTodo = () => {
      context.emit("delete-todo");
    };

    const toggle = () => {
      context.emit("toggle");
    };

    return {
      deleteTodo,
      todoItem,
      toggle,
    };
  },
};
</script>

<style scoped>
.line {
  text-decoration: line-through;
}
</style>
