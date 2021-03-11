import Home from "./pages/Home.vue";
import Counter from "./pages/Counter.vue";
import TodoApp from "./pages/TodoApp.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/counter", name: "Counter", component: Counter },
  { path: "/todo", name: "TodoApp", component: TodoApp },
];

export default routes;
