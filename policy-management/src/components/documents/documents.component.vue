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
                const response = await this.$http.get('https://test-preprod-pol-uk-test.apigee.net/mock-api/docs/v1/documents')
                const json = await response.json();
                for(var k in json.documents) {
                    this.documents.push(new Document(json.documents[k]));
                }
            }
        },
        created: function(){
            this.getDocuments();
        }
    }
</script>