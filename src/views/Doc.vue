<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch </router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
          <li>
            <router-link to="/doc/clock">clock</router-link>
          </li>
          <li>
            <router-link to="/doc/tabbar">tabbar</router-link>
          </li>
        </ol>
      </aside>
      <main class="right_content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
    return { menuVisible };
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  height: 100vh;
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  height: 100vh;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
.right_content {
  // margin: 8px;
  // background: grey;
  width: 100%;
  border-radius: 3rem;
  box-shadow: 0.8rem 0.8rem 1.4rem var(--greyLight-2),
    -0.2rem -0.2rem 1.8rem var(--white);
  padding: 4rem;
  margin: 4rem;
}
</style>
