import Home from "./pages/Home.vue";
import Counter from "./pages/Counter.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/counter", name: "Counter", component: Counter },
];

export default routes;
