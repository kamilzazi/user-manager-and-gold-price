<template>
  <v-container>
    <v-card class="pa-3">
      <v-list>
        <p class="font-weight-black" align="center">CURRENT USERS</p>
        <v-list v-for="(user, index) in users" :key="user.id">
          <user v-bind:user="user" v-bind:index="index">
          </user>
        </v-list>
        <v-alert transition="scale-transition" v-show="usersLength" type="error">
          NO USER IN DATABASE
        </v-alert>
      </v-list>
    </v-card>
  </v-container>
</template>
<script>
  import EditUser from "./EditUser.vue";
  import User from "./User.vue";
  import RemoveUser from "./RemoveUser.vue";
  export default {
    components: {
      "remove-user": RemoveUser,
      "edit-user": EditUser,
      "user": User,
    },
    data() {
      return {
        isActiveEditComp: false,
      };
    },
    computed: {
      users() {
        return this.$store.state.users
      },
      usersLength: function () {
        return this.users.length <= 0;
      },
    },
  };
</script>