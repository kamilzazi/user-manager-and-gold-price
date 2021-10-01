<template>
    <div id="home">
        <div align="center">
            <navbar></navbar>
            <v-card width="50%" class="mt-3 mr-5 ml-5">
                <v-btn color="primary" v-on:click="isActiveAddComp = !isActiveAddComp">Add new user</v-btn>
                <div v-show="isActiveAddComp">
                    <add-user v-bind:nextUserId="nextUserId" v-on:addUserEvent="addUserMethod($event)"></add-user>
                </div>
            </v-card>
        </div>
        <app-users class="pa-2">
        </app-users>
        <div v-for="n in this.$store.state.counter" :key="n">
            <alert-bottom v-bind:n="n">
            </alert-bottom>
        </div>
    </div>
</template>
<script>
    import AppUsers from './AppUsers.vue';
    import AddUser from './AddUser.vue';
    import AlertBottom from '../components/AlertBottom'
    import Navbar from '../components/Navbar'


    export default {
        components: {
            'app-users': AppUsers,
            'add-user': AddUser,
            "alert-bottom": AlertBottom,
            "navbar": Navbar,


        },
        props: ['isActiveGoldComp'],
        data() {
            return {
                isActiveAddComp: false,
                nextUserId: 4,
                userIdToEdit: null,
                editFirstName: "",
                editLastName: "",
                editNick: ""
            }
        },
        computed: {
            users() {
                return this.$store.state.users
            },
        },
        methods: {
            addUserMethod: function (newUser) {
                console.log(newUser)
                this.users.push(newUser[0])
                this.nextUserId++
            },
        }
    }
</script>