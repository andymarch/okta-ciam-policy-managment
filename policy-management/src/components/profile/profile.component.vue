<template src='./profile.component.html'></template>
<style src='./profile.component.css'></style>

<script>
    import Profile from './models/profile.model.js'
    export default {
        name: 'profile',
        data(){
            return {
                profile: "",
            }
        },
        methods: {
            getProfile: async function() {
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    process.env.VUE_APP_API_BASE_URI+'/profile/v1/customer',
                     {params: {}, headers:
                      {'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        this.profile = new Profile(json);
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                    });
            }
        },
        created: function(){
            this.getProfile();
        }
    }
</script>