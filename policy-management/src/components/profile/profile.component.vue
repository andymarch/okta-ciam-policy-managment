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
                //get the planNumber from the userInfo
                var userInfo = await this.$auth.getUser();
                var planNumber = userInfo.PlanNumber[0];

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/profile/v1/customer',
                     {params: {}, headers: {'Authorization': planNumber}})
                     .then(async response => {
                        const json = await response.json();
                        this.profile = new Profile(json);
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