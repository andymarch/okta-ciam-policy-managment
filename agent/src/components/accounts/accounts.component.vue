<template src='./accounts.component.html'></template>
<style src='./accounts.component.css'></style>

<script>
import AccessList from "./models/agentCustomerAccessList.model.js"
import AccountAccess from './models/accountaccess.model.js';
    export default {
        name: 'accounts',
        data(){
            return {
                accessList: "",
                message: "",
                newAcc: new AccountAccess()
            }
        },
        methods: {
            getAccounts: async function() {
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/access/v1/agentcustomeraccess',
                     {params: {}, headers:
                      {'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        this.accessList = new AccessList(json)
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                    });
            },
            updateAccounts: async function(){
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                this.$http.post(
                    'http://test-preprod-pol-uk-test.apigee.net/api/access/v1/agentcustomeraccess',
                    JSON.stringify(this.accessList),
                    { headers:{'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}
                    )
                .then(response => {
                        this.message = "Changes saved successfully"
                    }, response => {
                        console.log("Error: "+response.status + " " + response.body)
                        this.message = "Sorry something went wrong."
                    });   
            },
            addAcc: async function(){
                this.accessList.add(this.newAcc);
                this.newAcc = new AccountAccess();
            }
        },
        created: function(){
            this.getAccounts();
        }
    }
</script>