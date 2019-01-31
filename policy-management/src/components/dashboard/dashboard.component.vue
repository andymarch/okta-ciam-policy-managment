<template src='./dashboard.component.html'></template>
<style src='./dashboard.component.css'></style>

<script>
    import Transactions from '../transactions/transactions.component.vue'
    export default {
        name: 'dashboard',
        data(){
            return {
                user:"",
                planId: null
            }
        },
        components: {
            Transactions
        },
        methods: {
            parsePlanId: async function() {
                this.user = await this.$auth.getUser();
                var token = await this.$auth.getAccessToken();
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                var json = JSON.parse(window.atob(base64));
                if(json.planid != undefined){
                    this.planId = json.planid;
                }
            }
        },
        created: function(){
            this.parsePlanId();
        }
    }
</script>