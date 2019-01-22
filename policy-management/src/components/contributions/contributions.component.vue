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
                const response = await this.$http.get('https://test-preprod-pol-uk-test.apigee.net/mock-api/contribution/v1/contributions');
                this.contributions = new Contributions(await response.json());
            },

            updateContributions: async function(){
                this.message = "Your contributions have been updated"
            }
        },
        created: function(){
            this.getContributions();
        }
    }
</script>