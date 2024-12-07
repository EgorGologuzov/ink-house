<template>
  <AppHeader />
  <div class="app__spliter"></div>
  <Hero />
  <div class="app__spliter"></div>
  <Catalog />
  <div class="app__spliter"></div>
  <Promo />
  <div class="app__spliter"></div>
  <OurTeam />
  <div class="app__spliter"></div>
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Hero from './components/Hero.vue'
import Catalog from './components/Catalog.vue'
import Promo from './components/Promo.vue'
import OurTeam from './components/OurTeam.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Catalog,
    Promo,
    OurTeam,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

* {
  box-sizing: border-box;
}

html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.app__spliter {
  width: 100%;
  height: 70px;
}
</style>
