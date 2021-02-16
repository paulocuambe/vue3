<template>
  <h1>{{ msg }}</h1>
  <h2>Count is {{ count }}</h2>
  <p>Increment by <input type="number" name="number" /></p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>So this is vue 3 humm??</p>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let count = ref(0);
    const increment = () => {
      count.value += 1;
    };

    const decrement = () => {
      count.value -= 1;
    };

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
