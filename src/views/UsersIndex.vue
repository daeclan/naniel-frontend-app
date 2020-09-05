<template>
  <div class="users-index">
    <h1>{{ message }}</h1>
    <div v-for="user in users">

      <br>
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
      <b>Cause ID</b> {{user.cause_id}}
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
      message: "Friends of Naniel",
      users: [],
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
  },
};
</script>