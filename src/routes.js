import Home from "./pages/Home.vue";
import Counter from "./pages/Counter.vue";
import TodoList from "./pages/TodoList.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/counter", name: "Counter", component: Counter },
  { path: "/todo", name: "TodoList", component: TodoList },
];

export default routes;
