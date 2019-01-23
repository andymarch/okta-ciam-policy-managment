<template src='./login.component.html'></template>
<style src='./login.component.css'></style>

<script>
    import OktaSignIn from '@okta/okta-signin-widget'
    import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
    import '@okta/okta-signin-widget/dist/css/okta-theme.css'
    export default {
    name: 'Login',
    mounted: function () {
        this.$nextTick(function () {
        this.widget = new OktaSignIn({
            baseUrl: process.env.VUE_APP_ISSUER.split('/oauth2')[0],
            clientId: process.env.VUE_APP_CLIENT_ID,
            redirectUri: process.env.VUE_APP_REDIRECT,
            //logo: require('@/assets/policy_cloud_black.png'),
            i18n: {
            en: {
                'primaryauth.title': 'Customer Sign in'
            }
            },
            features: {
                registration: true,                 // Enable self-service registration flow
                rememberMe: true,                   // Setting to false will remove the checkbox to save username
                multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
                selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
            },
            idps: [
                {type: 'GOOGLE', id: '0oaj2qy01c1n4GKa40h7'}
            ],
            authParams: {
            responseType: ['id_token', 'token'],
            issuer: process.env.VUE_APP_ISSUER,
            display: 'page',
            scopes: process.env.VUE_APP_SCOPE.split(' ')
            }
        })
        this.widget.renderEl(
            { el: '#okta-signin-container' },
            () => {
            /**
             * In this flow, the success handler will not be called because we redirect
             * to the Okta org for the authentication workflow.
             */
            },
            (err) => {
            throw err
            }
        )
        })
    },
    destroyed () {
        // Remove the widget from the DOM on path change
        this.widget.remove()
    }
    }
</script>