<template>
  <div class="carted-products-index text-center":style ="myStyle" id="wrapper">
    <h1>{{ message }}</h1>
    <!-- {{carted_products}} -->
    <div v-for="carted_product in carted_products">
      <br>
      <!-- <h2>PASS THIS PEA: "{{carted_product.id}}"</h2> -->
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
      message: "items in your cart",
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
      console.log("MY SON");
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
    removeItem: function () {
      // console.log("Bye!");
      axios.get("/api/users").then((response) => {
        this.$router.push("/about.html");
      });
    },
  },
};
</script>