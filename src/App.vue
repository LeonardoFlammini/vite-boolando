<script>
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: {
      Footer,
      Main,
      Header
    }
    
  }
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>


<style lang="scss">
@import "scss/main.scss";
</style>