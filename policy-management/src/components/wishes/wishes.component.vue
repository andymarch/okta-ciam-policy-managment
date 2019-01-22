<template src='./wishes.component.html'></template>
<style src='./wishes.component.css'></style>

<script>
    import Wishes from './models/wishes.model.js'
    export default {
        name: 'wishes',
        data(){
            return {
                wishes: "",
                message: ""
            }
        },
        methods: {
            getWishes: async function() {
                message: "";
                //const response = await this.$http.get('http://test-preprod-pol-uk-test.apigee.net/api/eow/v1/expressionofwishes');
                this.wishes = new Wishes();
            },

            updateWishes: async function(){
                this.message = "Changes saved successfully"
            }
        },
        created: function(){
            this.getWishes();
        }
    }
</script>