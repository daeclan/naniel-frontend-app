<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/products">Index</router-link> |
      <span v-if="isLoggedIn()"><router-link to="/products/new">Sell A Product</router-link> | </span>
      <span v-if="isLoggedIn()"><router-link to="/carted_products/">Your Cart</router-link> | </span>
      <!-- <span v-if="isLoggedIn()"> <router-link to="/products/:id/edit"> Edit Product</router-link> | </span> -->
      <router-link to="/about">About</router-link> |
      <span v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link>  </span>
      <span v-if="!isLoggedIn()"> | <router-link to="/login">Login</router-link> </span>
      <span v-if="isLoggedIn()"> <router-link to="/logout"> Logout</router-link></span>
    </div>
    <router-view/>
    <!-- <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body>
    <body>
      With You Soon
    </body> -->
  </div>
</template>

<style>
#app {
  font-family: Garamond, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(https://s3.amazonaws.com/noupe/2009/10/squidfingers.jpg);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b7df27;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },

    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
