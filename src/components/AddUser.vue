<template>
  <div class="pa-3" align="center">
    <p class="font-weight-bold">ADD NEW USER</p>
    <v-layout row justify-space-between>
      <v-flex xs3>
        <v-text-field v-model="nick" label="Nick" outlined> </v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-text-field v-model="firstName" label="First Name" outlined>
        </v-text-field>
      </v-flex>
      <v-flex xs3>
        <v-text-field v-model="lastName" label="Last Name" outlined>
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-btn depressed color="success" v-on:click="addUser">Add user</v-btn>
    <v-alert type="success" :value="alert" transition="scale-transition">
      USER ADDED
    </v-alert>
  </div>
</template>
<script>
export default {
  props: ["nextUserId"],
  data() {
    return {
      emptyInput: false,
      alert: false,
      newUser: [],
      firstName: "",
      lastName: "",
      nick: "",
    };
  },
  methods: {
    addUser: function () {
      if (
        (this.firstName !== "") &
        (this.lastName !== "") &
        (this.nick !== "")
      ) {
        this.newUser.push({
          id: this.nextUserId,
          FirstName: this.firstName,
          LastName: this.lastName,
          Nick: this.nick,
        }),
          this.$emit("addUserEvent", this.newUser);
        (this.firstName = ""), (this.lastName = ""), (this.nick = "");
        (this.newUser = []), this.nextUserId++;
        (this.alert = true),
          setTimeout(() => {
            this.alert = false;
          }, 1000);
      } else {
        alert("FILL IN ALL DATA!");
      }
    },
  },
};
</script>