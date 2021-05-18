<template>
  <div>
    <div class="clock">
      <div class="hand hours"></div>
      <div class="hand minutes"></div>
      <div class="hand seconds"></div>
      <div class="point"></div>
      <div class="marker">
        <span class="marker__1"></span>
        <span class="marker__2"></span>
        <span class="marker__3"></span>
        <span class="marker__4"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    /*  clock */
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    var clock = () => {
      let today = new Date();
      let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      let m = today.getMinutes(); // 0 - 59
      let s = today.getSeconds(); // 0 - 59

      h *= 30; // 12 * 30 = 360deg
      m *= 6;
      s *= 6; // 60 * 6 = 360deg

      rotation(hours, h);
      rotation(minutes, m);
      rotation(seconds, s);

      // call every second
      setTimeout(clock, 500);
    };

    var rotation = (target, val) => {
      target.style.transform = `rotate(${val}deg)`;
    };

    window.onload = clock();
  }
};
</script>
<style lang="scss" scope>
    
</style>