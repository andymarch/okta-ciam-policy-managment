<template src='./landing.component.html'></template>
<style src='./landing.component.css'></style>

<script>
    export default {
        name: 'landing',
        created: function(){
            if(this.$auth.isAuthenticated()){
                this.$router.push('/dashboard');
            }
        }
    }
</script>