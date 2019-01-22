<template src='./dashboard.component.html'></template>
<style src='./dashboard.component.css'></style>

<script>
    import Transactions from '../transactions/transactions.component.vue'
    export default {
        name: 'dashboard',
        components: {
            Transactions
        }
    }
</script>