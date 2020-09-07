<template>
  <div class="signup text-center">
    <form v-on:submit.prevent="submit()">
      <h1>Sign Up</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>User Name:</label> 
        <input type="text" class="form-control" v-model="user_name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>About Me:</label>
        <input type="text" class="form-control" v-model="about_me">
      </div>
      <div class="form-group">
        <label>Profile Picture:</label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <div class="form-group">
        <label>Primary Cause:</label>
        <input type="text" class="form-control" v-model="primary_cause">
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="passwordConfirmation">
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
      email: "",
      password: "",
      about_me: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        user_name: this.user_name,
        email: this.email,
        about_me: this.about_me,
        image_url: this.image_url,
        primary_cause: this.primary_cause,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/users", params)
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>