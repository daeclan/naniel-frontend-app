<template>
  <div class="products-index">
    <h1>{{ message }}</h1>
    <div v-for="product in products">

      <br> {{product}}
      <br>
      <b><a v-bind:href="`/products/${product.id}`">{{product.name}}</a></b>
      <br>
<!-- <div class="card" style="width: 18rem;">
  <img src=https://images-na.ssl-images-amazon.com/images/I/815W5k84jLL._AC_SL1500_.jpg class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Buy CandyLand and Give Me Money</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->
      <br>
      <b>Description</b> {{product.description}}
      <br>
      <br>
      <b>Price</b> ${{product.price}}.00
      <br>
      <br>
      <b>Cause ID</b> {{product.cause_id}}
      <br>
      <br>
      <img v-bind:src="product.image_url" width="400px">
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
      message: "Products For Sale",
      products: [],
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      console.log("Hello");
      axios.get("/api/products").then((response) => {
        console.log(response);
        this.products = response.data;
      });
    },
  },
};
</script>