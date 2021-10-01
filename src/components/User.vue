<template>
  <v-card elevation="4" class="pa-2 ma-2" color="blue lighten-5">
    <v-layout row align-center justify-space-between>
      <v-flex xs1> <b>Id: </b>{{ user.id }} </v-flex>
      <v-flex xs4> <b>Nick: </b>{{ user.Nick }} </v-flex>
      <v-flex xs4>
        <b>Name: </b>{{user.FirstName}} {{user.LastName}}
      </v-flex>
      <v-divider vertical></v-divider>
      <v-btn color="primary" v-on:click="isActiveEditComp = !isActiveEditComp">
        Edit user
      </v-btn>
      <v-spacer></v-spacer>
      <remove-user v-bind:user="user" v-bind:index="index"> </remove-user>
    </v-layout>
    <v-container  class="pt-2 pb-2" v-show="isActiveEditComp">
      <edit-user v-bind:isActiveEditComp="isActiveEditComp" v-bind:user="user"></edit-user>
    </v-container>
  </v-card>
</template>
<script>
  import EditUser from "./EditUser.vue";
  import RemoveUser from "./RemoveUser.vue";
  export default {
    props: ["user", "index"],
    data() {
      return {
        isActiveEditComp: false,
      };
    },
    components: {
      "remove-user": RemoveUser,
      "edit-user": EditUser,
    },
    computed: {
      userName() {
        return this.$store.getters.userName
      }
    },
    methods: {
      
    }
  };
</script>