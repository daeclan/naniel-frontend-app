<template>
  <div class="causes-index text-center"r>
    <h1>{{ message }}</h1>
    <div v-for="cause in causes">

      <br>
      <br>
      <br>
      <b>Cause #{{cause.id}} </b> 
      <br>
      <b><a v-bind:href="`/causes/${cause.id}`">{{cause.user_name}}</a></b>

      <br>
      <br>
      <h2>{{cause.name}} </h2>
      <br>
      <br>
      <b>Description</b> {{cause.description}}
      <br>
      <br>
      <b>Goal</b> {{cause.goal}}
      <br>
      <b>Progress</b> {{cause.progress}} / {{cause.goal}}
      <br>
      <img v-bind:src="cause.image_url" width="400px">
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
      message: "Causes",
      causes: [],
    };
  },
  created: function () {
    this.indexCauses();
  },
  methods: {
    indexCauses: function () {
      console.log("Causes");
      axios.get("/api/causes").then((response) => {
        console.log(response);
        this.causes = response.data;
      });
    },
  },
};
</script>