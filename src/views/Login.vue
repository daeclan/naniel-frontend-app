<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>User Name:</label>
        <input type="text" class="form-control" v-model="user_name">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user_name: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        user_name: this.user_name,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/products");
          console.log(response.data.jwt);
        })
        .catch((error) => {
          this.errors = ["Invalid user_name or password."];
          this.user_name = "";
          this.password = "";
        });
    },
  },
};
</script>