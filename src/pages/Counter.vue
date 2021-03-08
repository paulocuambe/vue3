<template>
  <h1>My counter</h1>
  <h2>Current value: {{ count }}</h2>
  <p>Step: <input type="number" v-model="step" /></p>
  <button @click="increment">Increment</button>
  <button @click="reset" v-show="count > 0">Reset counter</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const count = ref(0);
    const step = ref(1);

    const increment = () => {
      count.value += Number.parseInt(step.value);
    };

    const reset = () => {
      count.value = 0;
    };

    watch(step, (curr) => {
      if (curr && curr <= 0) {
        step.value = 1;
      }
    });

    return {
      count,
      step,
      increment,
      reset,
    };
  },
};
</script>
