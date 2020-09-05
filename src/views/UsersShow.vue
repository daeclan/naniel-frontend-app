<template>
  <div class="user-show">
    <h1>{{ message }}</h1>
      <br>
      <br>
      <b>{{user.user_name}}</b>
      <br>
      <br>
      {{user.about_me}}
      <br>
      <br>
      <br>
 
      <br>
      (eventually have an image here)
      <br>
      <br>
      <br>
        <span v-if="user.user_id == $parent.getUserId()">
          <br>
          <a v-bind:href="`/products/${user.id}/edit`">Edit This Product</a>
          <br>
          <button v-on:click="deleteProduct()"> Delete This Product </button>
        </span>
      <p>∞</p>
      </div
  
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
      message: "User Profile:",
      // user_id: current_user.id,
      user: [],
    };
  },
  created: function () {
    this.showUsers();
  },
  methods: {
    showUsers: function () {
      console.log("Hello");
      console.log(this.$route);
      axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.user = response.data;
      });
    },
  },
};
</script>