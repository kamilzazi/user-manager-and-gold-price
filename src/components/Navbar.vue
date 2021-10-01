<template>
    <nav>
        <v-toolbar flat>
            <v-toolbar-title>
                <v-btn class="primary" @click="drawer = !drawer">
                    <span class="material-icons">
                        menu
                    </span>
                </v-btn>
            </v-toolbar-title>
            <v-toolbar-content class="headline text-uppercase">
                <span>Users Manager and gold price</span>
            </v-toolbar-content>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="grey lighten-3">
            <div align="right">
                <v-btn class="primary" @click="drawer = !drawer">
                    <span class="material-icons">
                        menu
                    </span>
                </v-btn>
            </div>
            <v-list>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>HOME</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/home">
                    <v-list-tile-action>
                        <v-icon>people</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>USERS</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/goldprice">
                    <v-list-tile-action>
                        <v-icon>attach_money</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>PRICE OF GOLD </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false
            }
        }

    }
</script>