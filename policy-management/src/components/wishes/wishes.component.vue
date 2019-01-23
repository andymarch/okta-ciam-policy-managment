<template src='./wishes.component.html'></template>
<style src='./wishes.component.css'></style>

<script>
    import Beneficiary from './models/benficiary.model.js';
    import Wishes from './models/wishes.model.js';
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
                this.message = "";
                this.wishes = "";

                //get the planNumber from the userInfo
                var userInfo = await this.$auth.getUser();
                var planNumber = userInfo.PlanNumber[0];

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/eow/v1/expressionofwishes',
                     {params: {}, headers: {'Authorization': planNumber}})
                     .then(async response => {
                        const json = await response.json();
                        this.wishes = new Wishes(json)
                    }, response => {
                        console.log(response.status)
                    });
            },

            updateWishes: async function(){
                //get the planNumber from the userInfo
                var userInfo = await this.$auth.getUser();
                var planNumber = userInfo.PlanNumber[0];

                var array1 = new Array();
                array1['beneficiaries'] = this.wishes;
                console.log(JSON.stringify(this.wishes));

                this.$http.post(
                    'http://test-preprod-pol-uk-test.apigee.net/api/eow/v1/expressionofwishes',
                    JSON.stringify(this.wishes),{ headers: {'Authorization': planNumber}
                }).then(response => {
                    console.log(response.status)
                        this.message = "Changes saved successfully"
                    }, response => {
                        console.log(response.status + " " + response.body)
                        this.message = "Sorry something went wrong."
                    });   
            }
        },
        created: function(){
            this.getWishes();
        }
    }
</script>