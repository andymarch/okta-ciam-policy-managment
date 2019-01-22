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
                this.transactions = []
                const response = await this.$http.get('https://test-preprod-pol-uk-test.apigee.net/mock-api/transaction/v1/transactions')
                const json = await response.json();
                for(var k in json.transactions) {
                    this.transactions.push(new Transaction(json.transactions[k]));
                }

            }
        },
        created: function(){
            this.getTransactions();
        }
    }
</script>