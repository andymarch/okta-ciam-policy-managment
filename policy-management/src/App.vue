<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img id="branding" src="@/assets/policy_cloud_white.png"/></router-link>
    </div>
    <div id="context">
      <div class="contextbar">
        <router-link class="contextElement" v-if="!activeUser" to="/login">Login</router-link>
        <span class="contextElement" v-else>
          <font-awesome-icon class="clickable" icon="user-lock" v-on:click="showToken()"/> {{ activeUser.email }} - <a href="#" @click.prevent="logout">Logout</a>
        </span>
      </div>
    </div>
    <securityView v-if="displaySecurity" class="block">          
    </securityView>
    <router-view></router-view>
  </div>
</template>

<script>
import securityView from './components/security/security.component.vue'
export default {
      name: 'app',
      data () {
        return {
          activeUser: null,
          displaySecurity: false,
        }
      },
      components: {
        securityView
      },
      async created () {
        await this.refreshActiveUser()
      },
      watch: {
        // everytime a route is changed refresh the activeUser
        '$route': 'refreshActiveUser'
      },
      methods: {
        async refreshActiveUser () {
          this.activeUser = await this.$auth.getUser()
          this.token = await this.$auth.getAccessToken()
        },
        async logout () {
          await this.$auth.logout()
          await this.refreshActiveUser()
          this.$router.push('/')
        },
        showToken: function() {
          this.displaySecurity = !this.displaySecurity;          
        }
      }
    }
</script>

<style>
body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: #eeeff0;
  color: #707070;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

#header {
  background-color: #5261ac;
  height: 50px;
}
#context {
  background-color: #fff;
  height: 38px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #707070;
}

.page-content {
  max-width: 997px;
  margin: 0 auto;
  padding: 20px 10px;
  position: relative;
}

.block {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #e3e4e4;
  margin: 0 0 20px 0;
  position: relative;
  padding-bottom: 10px;
}

.contextbar {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
}

.contextElement {
  float:right;
  line-height: 38px;
  height: 38px;
}

#branding {
  max-height: 50px;
  float: left;
  margin-left: 10px;
}

.return-action {
  text-align: left;
  margin-left: 10px;
}

.return-action a {
  color: red;
}

.clickable {
  cursor: pointer;
}
</style>
