<template src='./login.component.html'></template>
<style src='./login.component.css'></style>

<script>
    import OktaSignIn from '@okta/okta-signin-widget'
    import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
    import '@okta/okta-signin-widget/dist/css/okta-theme.css'
    import sampleConfig from '../../okta.config.js'
    export default {
    name: 'Login',
    mounted: function () {
        this.$nextTick(function () {
        this.widget = new OktaSignIn({
            baseUrl: sampleConfig.oidc.issuer.split('/oauth2')[0],
            clientId: sampleConfig.oidc.clientId,
            redirectUri: sampleConfig.oidc.redirectUri,
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
            authParams: {
            responseType: ['id_token', 'token'],
            issuer: sampleConfig.oidc.issuer,
            display: 'page',
            scopes: sampleConfig.oidc.scope.split(' ')
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