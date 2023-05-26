# vue-project1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Products from "./views/Products.vue";
import Categories from "./views/Categories.vue";
import Cart from "./views/Cart.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";

Vue.use(Router);

export default new Router({
mode: "history",
routes: [
{
path: "/",
name: "home",
component: Home,
},
{
path: "/products",
name: "products",
component: Products,
},
{
path: "/categories",
name: "categories",
component: Categories,
},
{
path: "/cart",
name: "cart",
component: Cart,
},
{
path: "/login",
name: "login",
component: Login,
},
{
path: "/signup",
name: "signup",
component: Signup,
},
],
});
