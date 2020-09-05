<template>
  <div class="carted-products-index">
    <h1>{{ message }}</h1>

    {{carted_products}}
    <div v-for="carted_product in carted_products">

      <br>
      <br>
      <b><a v-bind:href="`/carted_products/${carted_product.id}`">{{carted_product.name}}</a></b>
      <br>
<!-- <div class="card" style="width: 18rem;">
  <img src=https://images-na.ssl-images-amazon.com/images/I/815W5k84jLL._AC_SL1500_.jpg class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Buy CandyLand and Give Me Money</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> -->
*****
      {{carted_products}}

      *****
      <br>
      {{carted_product}}
      <br>
      <b>Product ID</b> {{carted_product.product_id}}
      <br>
       <b>Quantity</b> {{carted_product.qty}}
      <br>
      <br> 
      <button v-on:click="removeItem()"> Remove Item From Cart </button>
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
      console.log("Bye!");
      axios
        .delete(`/api/carted_products/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/api/orders/${this.$route.order.id}`);
        });
    },
  },
};
</script>