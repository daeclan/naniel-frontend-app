<template>
  <div id="app" >
    
     <h1 class="site-heading text-center text-white d-none d-lg-block" :style ="myStyle" id="wrapper">
    <span class="site-heading-upper text-primary mb-3" :style ="myStyle" id="wrapper">Naniel App</span>
    <span class="site-heading-lower">BETA</span>
  </h1>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark py-lg-4 text-center" id="mainNav">
    <div class="container">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="/home">Naniel App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="home">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/about">About</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/products">Products For Sale</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/causes"> Causes / Naniels</a>
          </li>
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/users">Users</a>
          </li>
          <span v-if="!isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/login">Login</a>
          </li>
          </span>
          <span v-if="isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/causes/new">Create A Cause</a>
          </li>
          </span>
          <span v-if="isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/products/new">Create A Product</a>
          </li>
          </span>
          <span v-if="!isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/signup">Signup</a>
          </li>
          </span>
          <span v-if="isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/logout">Logout</a>
          </li>
          </span>
          <span v-if="isLoggedIn()">
          <li class="nav-item px-lg-4">
            <a class="nav-link text-uppercase text-expanded" href="/carted_products">Your Cart</a>
          </li>
          </span>
        </ul>
      </div>
    </div>
  </nav>

  <!-- <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">Fresh Coffee</span>
            <span class="section-heading-lower">Worth Drinking</span>
          </h2>
          <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
          </p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!-- <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Our Promise</span>
              <span class="section-heading-lower">To You</span>
            </h2>
            <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
          </div>
        </div>
      </div>
    </div> -->
  <!-- </section> -->
  <router-view/>
  <footer class="footer text-faded text-center py-5">
    <div class="container">
      <p class="m-0 small">Copyright &copy; Naniel App Enterprises 2020</p>
      <a href="https://lyme.org/" target="_blank" class="footer text-faded " aria-label="Instagram">L Y M E . O R G</a>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript -->

  
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
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/causes">Causes</router-link> |
      <router-link to="/products">Products</router-link> |
      <span v-if="isLoggedIn()"><router-link to="/products/new">Sell A Product</router-link> | </span>
      <span v-if="isLoggedIn()"><router-link to="/causes/new">Create A Cause</router-link> | </span>
      <span v-if="isLoggedIn()"><router-link to="/carted_products/">Your Cart</router-link> | </span>
      <router-link to="/about">About</router-link> |
      <span v-if="!isLoggedIn()"><router-link to="/signup">Signup</router-link>  </span>
      <span v-if="!isLoggedIn()"> | <router-link to="/login">Login</router-link> </span>
      <span v-if="isLoggedIn()"> <router-link to="/logout"> Logout</router-link></span>
    </div> -->
  </div>
</template>

<style>
/* #app {
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
} */
</style>

<script>
export default {
  data: function () {
    return {
      myStyle: {
        backgroundColor: "#d5eda6",
      },
    };
  },
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
