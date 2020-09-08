<template>
  <div class="users-index text-center" :style ="myStyle" id="wrapper">
    <br>
    <br>
    <br>
    <h1>{{ message }}</h1>
    <div v-for="user in users">

      <br>

      {{user}}
      <br>
      <br>
      <b>User #{{user.id}} </b> 
      <br>
      <b><a v-bind:href="`/users/${user.id}`">{{user.user_name}}</a></b>

      <br>
      <br>
      <b>Profile</b> {{user.about_me}}
      <br>
      <br>
      <b>Primary Cause:</b> {{user.primary_cause}}
      <br>
      <br>
      <img v-bind:src="user.image_url" width="400px">
      <p>∞</p>
      </div>
  
  </div>
  </div>
</template>



<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentUser: "value",
      message: "Friends of Naniel",
      users: [],
      myStyle: {
        backgroundColor: "#d5eda6",
      },
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      console.log("Hello");
      axios.get("/api/users").then((response) => {
        console.log(response);
        this.users = response.data;
      });
    },
    orderedUsers(users) {
      return users.filter((user) => {
        if (user[this.currentUser]) return user;
        console.log;
      });
    },
  },
};
</script>