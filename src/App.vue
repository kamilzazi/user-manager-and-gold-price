<template>
  <v-app>
      <router-view></router-view>
  </v-app>
</template>

<script>
  import Home from './views/Home.vue'
  import HomeComp from './components/Home.vue'
  import GoldPrice from './components/GoldPrice.vue'

  export default {
    name: 'App',

    components: {
      "home": Home,
      "homecomp": HomeComp,
      "gold-price": GoldPrice
    }
  }
</script>