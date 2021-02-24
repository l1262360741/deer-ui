<template>
  <div></div>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide('menuVisible',menuVisible)
  }
};
</script>
