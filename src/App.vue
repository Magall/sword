<script setup lang="ts">
import {useAuthStore} from "./store/auth";
import {onMounted} from "vue";

const store = useAuthStore();

onMounted(() => {
  store.autoLogin();
})

</script>

<template>
  <div>
    <router-view/>
  </div>
</template>


