<template>
  <div class="carted-products-index text-center":style ="myStyle" id="wrapper">
    <h1>{{ message }}</h1>
    <div v if=carted_products>{{status}}</div>
    <br>
    <div v-for="carted_product in carted_products">
      <br>
      <br>
      <b>  {{carted_product.product.name}} </b>
      <br>
      <img v-bind:src="carted_product.product.image_url" width="200px">
      <br>
      {{carted_product.product.description}}
      <br>
      Price: ${{carted_product.product.price}}.00
      <br>
      <b>Product ID</b> {{carted_product.product_id}}
      <br>
       <b>Quantity</b> {{carted_product.qty}}
      <br>
      <br> 
      <button v-on:click="removeItem(carted_product)"> Remove Item From Cart </button>
      <p>∞</p>
      </div>
      <button v-on:click="checkOut()"> Check Out </button>
  
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
      message: "your cart",
      status: "Your Cart Is Empty",
      carted_products: [],
      id: "",
      index: 0,
      myStyle: {
        backgroundColor: "#d5eda6",
      },
    };
  },
  created: function () {
    this.indexCartedProducts();
  },
  methods: {
    indexCartedProducts: function () {
      console.log("Index Run");
      axios.get("/api/carted_products").then((response) => {
        console.log(response.data);
        this.carted_products = response.data;
      });
    },
    checkOut: function () {
      console.log("Hi!");
      axios.post("api/orders").then((response) => {
        console.log(response.data.id);
        this.response = response.data.id;
        this.$router.push(`/orders/${this.response}`);
      });
    },
    removeItem: function (carted_product) {
      console.log("rain");
      console.log(this.carted_product);
      console.log("brain");
      axios
        .delete(`/api/carted_products/${carted_product.id}`)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/carted_products").catch((error) => {
            if (error.name != "NavigationDuplicated") {
              throw error;
            }
          });
        });
    },
  },
};
</script>