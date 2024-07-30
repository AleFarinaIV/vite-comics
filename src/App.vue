<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
import BgHero from "./components/partials/BgHero.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    BgHero,
  }
}
</script>

<template>

  <header>
    <AppHeader />
  </header>
  <BgHero />
  <main>
    <AppMain />
  </main>
  <footer>
    <AppFooter />
  </footer>

</template>

<style lang="scss">
@use "./styles/generals.scss"
</style>
