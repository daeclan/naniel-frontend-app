<template>
  <div class="causes-index text-center" :style="myStyle" id="wrapper">
     <br>
     <br>
    <h1>{{ message }}</h1>
    <label>WHO IS YOUR NANIEL?</label>
    <div v-for="cause in causes">

      <!-- <br>{{cause.user}} -->
      <br>
      <br>
      <b>Cause #{{cause.id}} </b> 
      <!-- <br>
      <b><a v-bind:href="`/causes/${cause.id}`">{{cause.user}}</a></b>
      <br> -->
      <br>
      <h1>{{cause.name}} </h1>
  
      <b>Goal</b> ${{cause.goal}}.00
      <br>
      <br>
       Goal Started by <b>{{cause.user.user_name}} </b>
      <br>
      <br>
      <b>Description:</b> {{cause.description}}
      <br>
      <br>
      
      <br>
      <b>Progress</b> ${{cause.progress}}.00 / ${{cause.goal}}.00
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
      message: "Causes + Naniels",
      causes: [],
      myStyle: {
        backgroundColor: "#d5eda6",
      },
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