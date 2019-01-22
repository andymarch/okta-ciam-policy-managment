<template src='./security.component.html'></template>
<style src='./security.component.css'></style>

<script>
    export default {
        name: 'security',
        data(){
            return {
                userAccessToken: "",
                idToken: "",
                userInfo: ""
            }
        },
        methods: {
            refreshData: async function() {
                this.userInfo = await this.$auth.getUser();
                this.idToken = await this.$auth.getIdToken();
                this.userAccessToken = await this.$auth.getAccessToken();
            },
        },
        created: function(){
            this.refreshData();
        }
    }
</script>