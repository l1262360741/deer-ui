<template>
  <div></div>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible);
    router.afterEach((to, from, next) => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
    var threeNums = function(nums) {
      var len = nums.length;
      if (len < 2) return [];
      let res = [];
      nums.sort((a, b) => {
        return a - b;
      });
      console.log(nums);
      for (var i = 0; i < len - 2; i++) {
        console.log(nums[i]);
      }
    };
    threeNums([3, 2, 1]);
    
  },
  
};
</script>
