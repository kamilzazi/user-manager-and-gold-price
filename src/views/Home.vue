<template>
  <v-app>
    <navbar></navbar>
    <div class="mt-3">
      <v-layout>
        <v-flex align="center">
          <v-card align="center" class="mr-3 ml-4 pt-1">
            <div>
              <v-btn color="primary" to="/home">Check existing users
              </v-btn>
            </div>
            <div>
              <router-link to="/home">
                <img height="400px" width="400px" src="../assets/users.jpg">
              </router-link>
            </div>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card align="center" class="mr-4 ml-3 pt-1">
            <div>
              <v-btn color="orange accent-1" to="/goldprice">Check current price of gold
              </v-btn>
            </div>
            <div class="pt-n2">
              <router-link to="/goldprice">
                <img height="400px" width="400px" src="../assets/gold.jpg" />
              </router-link>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-app>
</template>

<script>
  import Home from '../components/Home'
  import AlertBottom from '../components/AlertBottom'
  import Navbar from '../components/Navbar'


  export default {
    name: 'App',
    components: {
      "home": Home,
      "alert-bottom": AlertBottom,
      "navbar": Navbar,
    },
    data() {
      return {
        isActiveGoldComp: false,

      }
    },
  }
</script>