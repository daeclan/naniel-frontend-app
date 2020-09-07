<template>
  <div class="cause-show">
    <h1>{{ message }}</h1>
      <br>
      <br>
      <b>{{cause.name}}</b>
      <br>
      <br>
      {{cause.description}}
      <br>
      <br>
      {{cause.goal}}
      <br>
 
      <br>
      (eventually have an image here)
      <br>
      <br>
      <br>
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
      message: "Cause:",
      cause: [],
    };
  },
  created: function () {
    this.showCauses();
  },
  methods: {
    showCauses: function () {
      console.log("Hello");
      console.log(this.$route);
      axios.get(`/api/causes/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.cause = response.data;
      });
    },
  },
};
</script>