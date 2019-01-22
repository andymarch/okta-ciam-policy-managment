<template src='./profile.component.html'></template>
<style src='./profile.component.css'></style>

<script>
    import Profile from './models/profile.model.js'
    export default {
        name: 'profile',
        data(){
            return {
                profile: "",
                message: ""
            }
        },
        methods: {
            getProfile: async function() {
                //const response = await this.$http.get('http://test-preprod-pol-uk-test.apigee.net/api/profile/v1/customer');
                this.profile = new Profile();
            },

            updateProfile: async function(){
                this.message = "Changes saved successfully"
            }
        },
        created: function(){
            this.getProfile();
        }
    }
</script>