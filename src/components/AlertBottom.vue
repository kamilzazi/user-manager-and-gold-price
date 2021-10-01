<template>
    <v-dialog content-class="my-custom-dialog" type="success" :value="showButtonComp" 
        v-on="showButtonChange"
        transition="dialog-bottom-transition">
        <v-alert class="ma-0" type="success" :value="true" v-on="showButtonChange" transition="dialog-bottom-transition">
            <v-row class="pa-0" align="center">
                User successfully updated.
                <v-btn @click="closeAlert">Close
                </v-btn>
            </v-row>
        </v-alert>
    </v-dialog>
</template>
<script>
    export default {
        props: ['n'],
        data() {
            return {
                myValue: 1,
                showButtonComp: true
            }
        },
        components: {},
        mounted: function () {
            setTimeout(() => {
                this.showButtonComp = false
            }, 2000)
        },
        methods: {
            closeAlert: function () {
                this.showButtonComp = false
            }
        }
    }
</script>

<style scoped>
    .v-dialog__content {
        align-items: flex-end;
        justify-content: flex-end;
    }
</style>