<template>
<div>
    导航栏 |
    <router-link to="/">首页</router-link>|
    <router-link to="/doc">Doc</router-link>
</div>
<router-view></router-view>
</template>

<script>
export default {
    name: "App",

};
</script>
