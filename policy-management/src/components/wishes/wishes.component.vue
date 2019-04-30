<template scoped src='./wishes.component.html'></template>
<style src='./wishes.component.css'></style>

<script>
    import Beneficiary from './models/benficiary.model.js';
    import Wishes from './models/wishes.model.js';
    export default {
        name: 'wishes',
        data(){
            return {
                newBene: new Beneficiary(),
                wishes: "",
                message: ""
            }
        },
        methods: {
            getWishes: async function() {
                this.message = "";
                this.wishes = "";

                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    process.env.VUE_APP_API_BASE_URI+'/eow/v1/expressionofwishes',
                     {params: {}, headers:
                      {'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        this.wishes = new Wishes(json)
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                    });
            },

            updateWishes: async function(){
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                this.$http.post(
                    process.env.VUE_APP_API_BASE_URI+'/eow/v1/expressionofwishes',
                    JSON.stringify(this.wishes),
                    { headers:{'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}
                    )
                .then(response => {
                        this.message = "Changes saved successfully"
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                        this.message = "Sorry something went wrong."
                    });   
            },
            addBene: async function(){
                this.wishes.add(this.newBene);
                this.newBene = new Beneficiary();
            }
        },
        created: function(){
            this.getWishes();
        }
    }
</script>