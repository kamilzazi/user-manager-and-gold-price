import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users: [{
                id: 1,
                FirstName: "Kamil",
                LastName: "Zazula",
                Nick: "kamilzazi"
            },
            {
                id: 2,
                FirstName: "Damian",
                LastName: "Kopacz",
                Nick: "damiannick"
            },
            {
                id: 3,
                FirstName: "Emilka",
                LastName: "Usyk",
                Nick: "emilianick"
            },
        ],
        counter: 0,

    },
    getters: {

    },
    mutations: {
        setCounterAddOne: state => {
            state.counter += 1
        },
        deleteUser: (state, user) => {
            var index = state.users.findIndex(c => c.id == user.id)
            state.users.splice(index, 1)
        },
        showButtonChange: state => {
            state.showButton = true
            setTimeout(() => {
                state.showButton = false
            }, 3000)
        }
    }
})