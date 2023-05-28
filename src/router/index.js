import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import LoginForm from "../components/LoginForm.vue";
import SignUp from "../components/SignUp.vue";
import ProductView from "../views/ProductView.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "CategoriesView",
    component: CategoriesView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  // { path: "/category/:id", component: ProductView, props: true },
  {
    path: "/category/:category",
    name: "ProductView",
    component: ProductView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
