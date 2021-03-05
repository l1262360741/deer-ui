<template>
  <div></div>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    console.log(width);
    const menuVisible = ref(width <= 300 ? false : true);
    provide("menuVisible", menuVisible);
  }
};
</script>
