<template>
  <div class="products-create">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`">
    <h1>{{ message }}</h1>

      <div class="form-group">
        <label>Name:</label>
        <input v-model="name" type:text></input>
        <br>
         <small v-if="name.length <= 50">You have {{ 50 - name.length }} characters remaining</small>
         <small v-if="name.length > 50">Your product name is too long, has to be a max of 50 characters</small>
      
      </div>
    
      Description:  <input type="text" v-model="description" class="red-sometimes"> </input>
      <br>
       <small v-if="description.length > 0">{{280 - description.length}}</small>
       <small v-if="description.length > 280">Your Body Is Too Big</small>
       <small v-if="description.length > 280">Your Body Is Too Big</small>
      <br>
      Image URL:<input v-model="image_url" type:text>  </input>
      <br>
      <br>
      Price:<input v-model="price" type:text>  </input>
      <br>
      <br>
      Quantity:<input v-model="qty" type:text>  </input>
      <br>
      <br>
      Cause ID:<input v-model="cause_id" type:text>  </input>
      <br>
      <br>
      <button v-on:click="createProduct()">Create</button>
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
      message: "Create A Product!",
      products: [],
      price: "",
      name: "",
      qty: "",
      description: "",
      image_url: "",
      cause_id: "",
      user_id: "",
      errors: [],
      status: "",
    };
  },
  created: function () {},
  methods: {
    createProduct: function () {
      console.log("Check One");
      var params = {
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        price: this.price,
        qty: this.qty,
        cause_id: this.cause_id,
        user_id: this.user_id,
      };
      console.log("Check Two");
      axios
        .post("/api/products", params)
        .then((response) => {
          console.log(response).data;
          this.products.push(response.data);
          this.$router.push("/products");
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