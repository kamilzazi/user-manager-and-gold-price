<template>
    <v-btn depressed color="error" v-on:click="deleteUser(user)">Delete user</v-btn>

</template>

<script>
    export default {
        props: ['user'],
        data() {
            return {
            }
        },
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        methods: {
            deleteUser: function(user) {
                this.$store.commit('deleteUser', user)
            }
        }

    }
</script>