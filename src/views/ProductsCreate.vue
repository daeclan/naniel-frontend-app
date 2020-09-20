<template>
  <div class="products-create text-center filters" :style ="myStyle" id="wrapper">
    <img v-if="status" v-bind:src="`https://http.cat/${status}`">
    <h1>{{ message }}</h1>

      <div class="form-group text-center">
        <h2 class="display-12">Name:</h2>
        <input v-model="name" type:text></input>
        <br>
         <small v-if="name.length <= 50">You have {{ 50 - name.length }} characters remaining</small>
         <small v-if="name.length > 50">Your product name is too long, has to be a max of 50 characters</small>
      
      </div>
    
      <h2 class="display-12">Description:</h2>  <input v-model="description" type:text></input> 
      <br>
      <br>
      <h2 class="display-12">Image URL:</h2><input v-model="image_url" type:text>  </input>
      <br>
      <br>
      <h2 class="display-12">Price:</h2> <b>$ </b><input v-model="price" type:text>  </input>
      <br>
      <br>
      <h2 class="display-12">Quantity:</h2><input v-model="qty" type:text>  </input>
      <br>
      <br>
      <!-- <h2 class="display-12">Cause :</h2>
      <input v-model="cause_id" type:text>  </input> -->
      <section>
      <div class="container">
        <div class="text-black justify-content-center">
          <h2 class="display-12">Cause :</h2>
              <select v-model='cause'>
                <option v-for='cause in causes' :value='cause.id'>{{ cause.name }}</option>
              </select>
        </div>
      </div>
    </section>
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
      cause: "",
      user_id: "28",
      errors: [],
      status: "",
      myStyle: {
        backgroundColor: "#d5eda6",
      },
      causes: [],
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
  created: function () {
    this.getCauseName();
  },
  methods: {
    getCauseName: function () {
      console.log("adding a cause...");
      axios.get("api/causes").then((response) => {
        console.log(response.data);
        this.causes = response.data;
        console.log(this.causes);
      });
    },
    createProduct: function () {
      console.log("Hello");
      console.log(this.selectedCause);
      var params = {
        // cause: this.cause.id,
        name: this.name,
        description: this.description,
        image_url: this.image_url,
        price: this.price,
        qty: this.qty,
        cause_id: this.cause,
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