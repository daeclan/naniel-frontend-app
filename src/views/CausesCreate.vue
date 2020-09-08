<template>
  <div class="causes-create text-center" :style ="myStyle" id="wrapper">
    <br>
    <br>
    <br>
    <h1>{{ message }}</h1>

      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" type:text></input>
        <br>
         <small v-if="name.length <= 50">You have {{ 50 - name.length }} characters remaining</small>
         <small v-if="name.length > 50">Your Cause name is too long, has to be a max of 50 characters</small>
      
      </div>
    
      <label>Description:</label>  
      <input v-model="description" type:text></input>
      <br>
       <small v-if="description.length > 0">{{280 - description.length}}</small>
       <small v-if="description.length > 280">Your Description Is Too Big</small>
       <small v-if="description.length > 280">Your Description Is Too Big</small>
      <br>
      <label>Goal (Amount in USD/$): </label>
      <input v-model="goal" type:text>  </input>
      <br>
      <br>
      </input>
      <br>
      <br>
      <br>
      <br>
      <button v-on:click="createCause()">Create</button>
        <br>
        <br>
        <b> </b>
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
      message: "Create A Cause!",
      name: "",
      goal: "",
      description: "",
      status: true,
      user_id: "",
      errors: [],
      myStyle: {
        backgroundColor: "#d5eda6",
      },
    };
  },
  methods: {
    createCause: function () {
      console.log("Check One");
      var params = {
        name: this.name,
        goal: this.goal,
        description: this.description,
        status: this.status,
        user_id: this.user_id,
      };
      console.log("Check Two");
      axios
        .post("/api/causes", params)
        .then((response) => {
          console.log(response).data;
          this.causes.push(response.data);
          this.$router.push("/causes");
        })
        .catch((error) => {
          console.log((error.response || {}).data);
          return false;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response);
          this.status = error.response.status;
        });
    },
  },
};
</script>