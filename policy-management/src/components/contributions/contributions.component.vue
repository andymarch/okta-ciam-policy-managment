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

                //get the planNumber from the userInfo
                var userInfo = await this.$auth.getUser();
                var planNumber = userInfo.PlanNumber[0];

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/contribution/v1/contributions',
                     {params: {}, headers: {'Authorization': planNumber}})
                     .then(async response => {
                        const json = await response.json();
                        this.contributions = new Contributions(await response.json());
                    }, response => {
                        console.log(response.status)
                    });
            },

            updateContributions: async function(){ 
                //get the planNumber from the userInfo
                var userInfo = await this.$auth.getUser();
                var planNumber = userInfo.PlanNumber[0];


                this.$http.put(
                    'http://test-preprod-pol-uk-test.apigee.net/api/contribution/v1/contributions',
                    this.contributions,
                    {
                         headers: {'Authorization': planNumber}
                    }).then(response => {
                        this.message = "Your contributions have been updated."
                    }, response => {
                        console.log(response.status + " " + response.body)
                        this.message = "Sorry something went wrong."
                    });
            }
        },
        created: function(){
            this.getContributions();
        }
    }
</script>