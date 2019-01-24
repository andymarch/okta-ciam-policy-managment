<template src='./documents.component.html'></template>
<style scoped src='./documents.component.css'></style>

<script>
    import Document from './models/document.model.js'
    export default {
        name: 'documents',
        data(){
            return {
                documents: []
            }
        },
        methods: {
            getDocuments: async function() {
                this.documents = []
                var tokenValue = await this.$auth.getAccessToken();
                var idTokenValue = await this.$auth.getIdToken();

                const response = await this.$http.get(
                    'http://test-preprod-pol-uk-test.apigee.net/api/docs/v1/documents',
                     {params: {}, headers:{'Authorization': 'Bearer '+tokenValue,'id_token': idTokenValue}}) 
                     .then(async response => {
                        const json = await response.json();
                        for(var k in json.documents) {
                            this.documents.push(new Document(json.documents[k]));
                        }
                    }, response => {
                        console.log(response.status)
                    });
            },
            downloadDocument: async function(documentCode){
                console.log(documentCode);
            }
        },
        created: function(){
            this.getDocuments();
        }
    }
</script>