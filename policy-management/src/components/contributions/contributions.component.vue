<template src='./contributions.component.html'></template>
<style src='./contributions.component.css'></style>

<script>
    import Contributions from './models/contributions.model.js'
    export default {
        name: 'contributions',
        data(){
            return {
                contributions: '',
                message: ''
            }
        },
        methods: {
            getContributions: async function() {
                this.message = "";
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    process.env.VUE_APP_API_BASE_URI+'/contribution/v1/contributions',
                     {params: {}, headers:{'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        this.contributions = new Contributions(await response.json());
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                    });
            },

            updateContributions: async function(){ 
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();


                this.$http.put(
                    process.env.VUE_APP_API_BASE_URI+'/contribution/v1/contributions',
                    this.contributions,
                    {
                         headers:{'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}
                    }).then(response => {
                        this.message = "Your contributions have been updated."
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                        this.message = "Sorry something went wrong."
                    });
            }
        },
        created: function(){
            this.getContributions();
        }
    }
</script>