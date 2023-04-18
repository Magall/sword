import { defineStore } from "pinia";
import { ref } from "vue";
import router from "../router";

export const useAuthStore = defineStore("auth", () => {
  const isLoggedIn = ref(false);

  function login(user: string, pass: string): boolean {
    if (user === "user" && pass === "pass") {
      isLoggedIn.value = true;
      localStorage.setItem("isLoggedIn", isLoggedIn.value + "");
      router.push({ name: "discovery" });
      return true;
    }
    return false;
  }

  function logout(): void {
    isLoggedIn.value = false;
    localStorage.setItem("isLoggedIn", "");
  }

  function autoLogin(): void {
    const local = localStorage.getItem("isLoggedIn");
    if (local) {
      const parsedLocal = JSON.parse(local);
      console.log(parsedLocal);
      if (parsedLocal) {
        isLoggedIn.value = true;
      }
    }
  }

  return { isLoggedIn, login, logout, autoLogin };
});
