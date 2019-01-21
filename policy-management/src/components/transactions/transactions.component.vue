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
                    console.log('value'+k.paidIn)
                    this.transactions.push(new Transaction(k));
                }

            }
        },
        created: function(){
            this.getTransactions();
        }
    }
</script>