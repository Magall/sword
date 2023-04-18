<script setup>
import {ref} from "vue";
import {useAuthStore} from './../../store/auth';

const data = ref({
  user: '',
  pass: '',
})

const store = useAuthStore();

function Login() {
  if (!store.login(data.value.user, data.value.pass)) {
    alert('Login Fail')
  }
  console.log('Fazer login');
}

</script>
<template>
  <div id="login-container">
    <form @submit.prevent="Login">
      <label for="user">Username</label>
      <input type="text" placeholder="username" id="user" v-model="data.user" required/>

      <label for="pass">Password</label>
      <input type="password" placeholder="password" id="pass" v-model="data.pass" required/>

      <input type="submit" value="Sign in"/>

      <div id="bottom-text">
        <span>Don't have an account? </span>
        <span>Click here to sign up</span>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>
