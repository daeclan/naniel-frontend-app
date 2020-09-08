<template>
  <div class="products-edit text-center" :style ="myStyle" id="wrapper">
    <!-- <form v-on.submit.prevent="editProduct()"> -->
    <h1>{{ message }}</h1>
    <h3> {{this.product}} </h3>
   

    <div class="form group text-center">
      <label> Name </label>
      <input type="text" class="form-control text-center" v-model="product.name">
    </div> 
    <div class="form group text-center">
      <label> Description </label>
      <input type="text" class="form-control text-center" v-model="product.description">
    </div> 
    <div class="form group text-center">
      <label> Image </label>
      <input type="text" class="form-control text-center" v-model="product.image_url">
    </div> 
    <div class="form group text-center">
      <label> Price </label>
      <input type="text" class="form-control text-center" v-model="product.price">
    </div> 
    <div class="form group text-center">
      <label> Quantity </label>
      <input type="text" class="form-control text-center" v-model="product.qty">
    </div> 
    <div class="form group text-center">
      <label> Cause ID </label>
      <input type="text" class="form-control text-center" v-model="product.cause_id">
    </div> 

       <button v-on:click="editProduct()"> Submit </button>
    <!-- <input type="submit" class="btn btn-primary" value="Submit">
    </form> -->
    
    </div>
  </div>
</template>

// want to call a wild card, 
// call it's information
// set that as the default text
// display it as editable

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Edit A Product!",
      product: {},
      errors: [],
      myStyle: {
        backgroundColor: "#d5eda6",
      },
    };
  },
  methods: {
    editProduct: function () {
      var params = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        qty: this.product.qty,
        image_url: this.product.image_url,
        cause_id: this.product.cause_id,
      };

      console.log("Edit");

      axios
        .patch(`/api/products/${this.$route.params.id}`, params)
        .then((response) => {
          this.$router.push("/products");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showProduct: function () {
      console.log("Hello");
      console.log(this.$route);
      axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    },
    created: function () {
      // this.showProduct();
    },
  },
};
</script>