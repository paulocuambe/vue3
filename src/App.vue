<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <br />
    <router-link :to="{ name: 'Counter' }">Counter</router-link>
    <br />
    <router-link :to="{ name: 'TodoApp' }">TodoList</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
