export default {
    oidc: {
      clientId: '0oaj2s4r5kkHCYt7w0h7',
      issuer: 'https://pension-plan.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:8080/implicit/callback',
      scope: 'openid profile email',
    },
    resourceServer: {
      messagesUrl: 'http://localhost:8000/api/messages',
    },
  };