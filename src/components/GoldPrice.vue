<template>
  <div id="gold-price" align="center">
    <navbar></navbar>
    <v-card width="50%" color="amber accent-1" class="mt-3 pa-3"> 
      <div class="font-weight-bold headline mb-3">CURRENT PRICE OF GOLD</div>
      <div class="table-gold-title title ">
        <v-layout class="mt-2 mb-2">
          <v-flex>Date
          </v-flex>
          <v-flex>Price [PLN]
          </v-flex>
        </v-layout>
      </div>

      <section v-if="errored">
        <p class="mt-4">We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>

        <div v-if="loading">Loading...</div>

        <div v-else v-for="post in posts" :key="post">
          
          <v-layout class="gold-date-price amber accent-1" border: 5px solid red;>
            <v-flex>
              {{post.data}}
            </v-flex>
            <v-flex>
              {{post.cena}}
            </v-flex>
          </v-layout>
        </div>
      </section>

    </v-card>
  </div>
</template>

<script>
    import Navbar from '../components/Navbar'
  
  export default {
    components:{
      'navbar': Navbar
    },
    data() {
      return {
        posts: null,
        loading: true,
        errored: false
      }
    },
    created() {

      this.loading = false;
      this.posts = null

      axios.get(`http://api.nbp.pl/api/cenyzlota/last/30/?format=json`)
        .then(response => {
          this.posts = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  };
</script>

<style scoped>
  .table-gold-title {
    border: 3px solid black !important
  }

  .gold-date-price {
    border: 1px solid black !important
  }
</style>