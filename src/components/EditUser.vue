<template>
  <v-card align="center">
    <v-card-title class="pa-3 pb-0 pt-2">
      <span class="font-weight-bold">EDITING USER</span>
    </v-card-title>
    <v-card-text class="pt-0 pb-0">
      <v-layout row justify-space-between>
        <div xs3>
          <v-text-field
            class="pt-0 pt-0"
            xs3
            label="Nick"
            required
            v-model="editedNick"
          >
          </v-text-field>
        </div>
        <div xs3>
          <v-text-field
            class="pt-0 pt-0"
            xs3
            label="First name"
            required
            v-model="editedFirstName"
          >
          </v-text-field>
        </div>
        <div xs3>
          <v-text-field
            class="pt-0 pt-0"
            label="Last name"
            required
            v-model="editedLastName"
          >
          </v-text-field>
        </div>
      </v-layout>
    </v-card-text>
    <v-btn color="success" v-on:click="editUser()"> SAVE </v-btn>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: ["user", "isActiveEditComp"],
  data() {
    return {
      editedFirstName: "",
      editedLastName: "",
      editedNick: "",
    };
  },
  methods: {
    editUser: function () {
      if (
        (this.editedFirstName != "") &
        (this.editedLastName != "") &
        (this.editedNick != "")
      ) {
        this.user.Nick = this.editedNick;
        this.user.FirstName = this.editedFirstName;
        this.user.LastName = this.editedLastName;
        this.editedFirstName = "";
        this.editedLastName = "";
        this.editedNick = "";
        this.$store.commit("showButtonChange");
        this.$store.commit("setCounterAddOne");

      } else {
        alert("FILL IN THE CORRECT USER ID!");
      }
    },
  },
};
</script>