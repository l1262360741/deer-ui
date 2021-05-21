<template>
  <div>
    <main id="app">
      <section class="demo">
        <div class="card"></div>
        <span class="operator">+</span>
        <div class="card"><span>+ lighten</span></div>
        <span class="operator">+</span>
        <div class="card"><span>+ screen</span></div>
        <span class="operator">=</span>
      </section>

      <section class="cards">
        <div class="card charizard"></div>
        <div class="card pika"></div>
        <div class="card mew"></div>
      </section>

      <h1>Pokemon Card, Holo Effect</h1>

      <!-- <style class="hover"></style> -->
    </main>
  </div>
</template>
<script>
export default {
  mounted() {
    /*

  using 
    - an animated gif of sparkles.
    - an animated gradient as a holo effect.
    - color-dodge / lighten blend mode

  there's some weird graphical glitches on
  firefox due to color-dodoge + transforms + animations + gifs + layers
  so I set it to screen, which looks OK, but color-dodge is nicer.
  
*/

    var $cards = document.getElementsByClassName(".card");
    // var $style = $(".hover");
    $cards
      .addEventListener("mousemove", function (e) {
        var $card = $(this);
        var l = e.offsetX;
        var t = e.offsetY;
        var h = $card.height();
        var w = $card.width();
        var lp = Math.abs(Math.floor((100 / w) * l) - 100);
        var tp = Math.abs(Math.floor((100 / h) * t) - 100);
        var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
        var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
        var ty = (tp - 50) / 2;
        var tx = (lp - 50) * 0.5 * -1;
        var bg = `background-position: ${lp}% ${tp}%;`;
        var bg2 = `background-position: ${lp2}% ${tp2}%;`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        var style = `
    .card.active:before { ${bg} }
    .card.active:after { ${bg2} }
    .card.active { ${tf} }
  `;
        $cards.removeClass("active");
        $card.addClass("active");
        debugger
        $("<style type='text/css' id='hover' />").appendTo("head");
        $('#hover').text(style)
        // $style.html(style);
        
      })
      .addEventListener("mouseout", function () {
        $cards.removeClass("active");
      });
  },
  methods:{
    mouseMoveIn(){
      var $card = $(this);
        var l = e.offsetX;
        var t = e.offsetY;
        var h = $card.height();
        var w = $card.width();
        var lp = Math.abs(Math.floor((100 / w) * l) - 100);
        var tp = Math.abs(Math.floor((100 / h) * t) - 100);
        var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
        var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
        var ty = (tp - 50) / 2;
        var tx = (lp - 50) * 0.5 * -1;
        var bg = `background-position: ${lp}% ${tp}%;`;
        var bg2 = `background-position: ${lp2}% ${tp2}%;`;
        var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`;
        var style = `
    .card.active:before { ${bg} }
    .card.active:after { ${bg2} }
    .card.active { ${tf} }
  `;
        $cards.removeClass("active");
        $card.addClass("active");
    }
  }
};
</script>
<style  scoped>

.card {
  
  --color1: rgb(0, 231, 255);
  --color2: rgb(255, 0, 231);
  
  width: 320px;
  height: 446px;
  background-color: #211799;
  background-image: url(https://images.pokemontcg.io/swsh3/19_hires.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5% / 3.5%;
  box-shadow: -13px -13px 13px -15px var(--color1), 
    13px 13px 13px -15px var(--color2), 
    0 0 4px 2px rgba(255,255,255,0.5),
    0 35px 25px -15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  display: block;
  vertical-align: middle;
  margin: 20px 10px;
  animation: holoCard 15s ease infinite;
  transform-origin: center;
  z-index: 10;
  overflow: hidden;
  transform: translate3d(0,0,-1px); 
}

.card.charizard {
  --color1: rgb(255, 148, 54);
  --color2: rgb(255, 90, 144);
}
.card.pika {
  --color1: #ffdf35;
  --color2: #65f0ff;
  background-image: url(https://images.pokemontcg.io/swshp/SWSH063_hires.png);
}
.card.mew {
  --color1: #eb8bff;
  --color2: #7eeefa;
  background-image: url(https://images.pokemontcg.io/swsh3/69_hires.png);
}

.card > span {
  position: relative;
  top: 45%;
}

.card:before,
.card:after {
  content: "";
  opacity: .1;
  mix-blend-mode: screen;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-repeat: no-repeat;
}
.card:before {
  background-position: 50% 50%;
  background-size: 300% 300%;
  animation: holoGradient 15s ease infinite both;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    var(--color1) 30%,
    transparent 47.5%,
    transparent 52.5%,
    var(--color2) 70%,
    transparent 100%
  );
}
.card:after {
  opacity: 1;
  background-image: url("https://assets.codepen.io/13471/sparkles.gif");
  background-position: center;
  background-size: 160%;
  z-index: 2;
  animation: holoSparkle 15s ease infinite both;
  filter: brightness(1);
  transition: filter 0.5s ease;
}

.card.active {
  animation: none;
}

.card.active:before {
  opacity: 1;
  animation: none;
  transition: none;
  background-image: linear-gradient(
    115deg,
    transparent 30%,
    var(--color1) 48%,
    var(--color2) 53%,
    transparent 70%
  );
  filter: opacity(0.66);
  mix-blend-mode: screen;
}

.card.active:before,
.card.active:after {
  animation: none;  
}
.card.active:after {
  filter: brightness(2.5);
  mix-blend-mode: screen;
}

.demo .card:nth-of-type(1),
.demo .card:nth-of-type(2),
.demo .card:nth-of-type(3) {
  width: 124px;
  height: 170px;
  box-shadow: 0 0 1px 1px rgba(white,0.4), 0 25px 15px -10px rgba(0, 0, 0, 0.5);
  animation: none;
}

.demo .card:nth-of-type(1),
.demo .card:nth-of-type(2),
.demo .card:nth-of-type(3) {
  &:before, &:after {
    animation: none;
    opacity: 1;
  } 
}
.demo .card:nth-of-type(1) {
  &:before, &:after { display: none; }
}
.demo .card:nth-of-type(2) {
  background: none;
  &:before { display: none; }
}
.demo .card:nth-of-type(3) {
  background: none;
  &:before { background-position: center; }
  &:after { display: none; }
}

.operator {
  display: inline-block;
  vertical-align: middle;
  font-size: 45px;
}

@keyframes holoSparkle {
  0%, 5%, 100% { opacity: 0.24; }
  20% { opacity: 1; }
  75% { opacity: .75; }
}

@keyframes holoGradient {
  0%, 100% {
    opacity: 0.05;
    background-position: 50% 50%;
  }
  33% {
    background-position: 100% 100%;
    opacity: .66;
  }
  66% {
    background-position: 0% 0%;
    opacity: .66;
  }
}

@keyframes holoCard {
  0%, 100% {
    transform: rotateZ(0deg) rotateX(0deg) rotateY(0deg);
  }
  33% {
    transform: rotateZ(-6deg) rotateX(-9deg) rotateY(10deg);
  }
  66% {
    transform: rotateZ(6deg) rotateX(9deg) rotateY(-10deg);
  }
}


html, body {
  height: 100%;
  background-color: #333844;
  padding: 0;
  z-index: -1;
  transform: translate3d(0,0,0.1px);
}
body {
  color: white;
  background-color: #333844;
  font-family: "Heebo", sans-serif;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  height: 100%;
  text-align: center;
}
h1 {
  display: block;
  margin: 30px 0 60px;
}
p {
  margin-top: 5px;
  font-weight: 200;
}
#app {
  position: relative;
}

.demo,
.cards { 
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
  position: relative;
  z-index: 1;
  transform: translate3d(0.1px, 0.1px, 0.1px )
}

.cards .card {
  &:nth-child(2) {
    &, &:before, &:after {
      animation-delay: 0.2s;
    }
  }
  &:nth-child(3) {
    &, &:before, &:after {
      animation-delay: 0.4s;
    }
  }
}
</style>