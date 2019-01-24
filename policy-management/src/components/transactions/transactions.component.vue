<template src='./transactions.component.html'></template>
<style src='./transactions.component.css'></style>

<script>
    import Transaction from './models/transaction.model.js'
    export default {
        name: 'transactions',
        data(){
            return {
                transactions: []
            }
        },
        methods: {
            getTransactions: async function() {
                this.transactions = [];
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/transaction/v1/transactions',
                     {params: {}, headers:
                      {'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        for(var k in json.transactions) {
                            this.transactions.push(new Transaction(json.transactions[k]));
                        }
                    }, response => {
                        console.log(response.status)
                    });
            }
        },
        created: function(){
            this.getTransactions();
        }
    }
</script>