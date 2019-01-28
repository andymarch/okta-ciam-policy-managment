<template src='./profile.component.html'></template>
<style src='./profile.component.css'></style>

<script>
    import AgentProfile from './models/agentprofile.model.js'
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
                    'http://test-preprod-pol-uk-test.apigee.net/api/profile/v1/agent',
                     {params: {}, headers:
                      {'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        this.profile = new AgentProfile(json);
                    }, response => {
                        console.log(response.status)
                    });
            }
        },
        created: function(){
            this.getProfile();
        }
    }
</script>