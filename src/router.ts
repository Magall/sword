import Login from "./views/login/Login.vue";
import Discovery from "./views/discovery/Discovery.vue";
import Settings from "./views/settings/Settings.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { useAuthStore } from "./store/auth";

const routes = [
  { path: "/", component: Login, name: "login" },
  { path: "/discovery", component: Discovery, name: "discovery" },
  { path: "/settings", component: Settings, name: "settings" },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
router.beforeEach(async (to, from) => {
  const store = useAuthStore();

  if (
    // make sure the user is authenticated
    !store.isLoggedIn &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
});
export default router;
