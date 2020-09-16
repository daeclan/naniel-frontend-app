<template>
  <div class="products-create text-center filters" :style ="myStyle" id="wrapper">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`">
    <h1>{{ message }}</h1>

      <div class="form-group text-center">
        <b>Name:  </b>  
        <input v-model="name" type:text></input>
        <br>
         <small v-if="name.length <= 50">You have {{ 50 - name.length }} characters remaining</small>
         <small v-if="name.length > 50">Your product name is too long, has to be a max of 50 characters</small>
      
      </div>
    
      <b>Description: </b>  <input v-model="description" type:text></input> 
      <br>
      <br>
      <b>Image URL: </b><input v-model="image_url" type:text>  </input>
      <br>
      <br>
      <b>Price: $</b><input v-model="price" type:text>  </input>
      <br>
      <br>
      <b>Quantity:</b> <input v-model="qty" type:text>  </input>
      <br>
      <br>
      <b>Cause ID:</b> <input v-model="cause_id" type:text>  </input>
        <div class="filter">
      <label for="component-dropdown text-center">Component-based dropdown: </label>
      <dropdown id="component-dropdown text-center" :options="causeOptions" v-model="selectedCause"></dropdown>
    </div>
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
import Dropdown from "@/components/DropDown";

export default {
  components: {
    dropdown: Dropdown,
  },
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
      myStyle: {
        backgroundColor: "#d5eda6",
      },
      selectedCause: "",
      causeOptions: {
        Naniel: "Naniel",
        "Black Lives Matter": "Black Lives Matter",
        "Hyperbaric Oxygen Chamber": "Hyperbaric Oxygen Chamber",
        "The Okra Project": "The Okra Project",
        "Lyme Disease": "Lyme Disease ",
        "No Us Without You": "No Us Without You",
        Cancer: "Cancer",
      },
    };
  },
  created: function () {},
  methods: {
    createProduct: function () {
      console.log("Hello");
      console.log(this.selectedCause);
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