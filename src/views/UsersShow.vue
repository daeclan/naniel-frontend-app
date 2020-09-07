<template>
  <div class="user-show text-center">
    <h1>{{ message }}</h1>
      <br>
      <br>
      <h1>{{user.user_name}}</h1>
      <br>
      {{selectedFile}}
      <br>
      <b>About Me:</b> {{user.about_me}}
      <br>
      <br>
      <b>Primary Cause:</b> {{user.primary_cause}}
      <br>
      <br>
      <b> My Non Functioning Image Uploader! </b>
      <br>
      <br>
      <input type="file" change="onFileChanged">
      <br>
      <br>
      <button @click="onUpload">Upload!</button>
      <br>
      <br>
      (eventually have an image here)
      <br>
      <br>
      <br>
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
      user: [],
      change: "",
      selectedFile: null,
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
    onFileChanged(event) {
      const file = event.target.files[0];
    },
    onUpload() {
      axios.post(`/api/users/${this.$route.params.id}`, this.selectedFile);
    },
  },
};
</script>