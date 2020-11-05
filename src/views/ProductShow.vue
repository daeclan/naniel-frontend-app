<template>
  <div class="product-show text-center" :style ="myStyle" id="wrapper">
    
    <h1>{{ message }}</h1>
      <br>
      <!-- {{product}} -->
      <br>
      <h2>{{product.name}}</h2>
      <br>
      Cause You Are Supporting: <b>{{product.cause.name}}</b>
      <br>
      <br>
      <i>Description:</i> 
      <br>
      {{product.description}}
      <br>
      <br>
      Price:
      ${{product.price}}.00
      <br>
      <br>
      <img v-bind:src="product.image_url" width="400px">
      <br>
      <br>
      <button :disabled="isSoldOut" v-on:click="buyProduct()"> Add Product To Cart </button>
      <br>
      <br>
      Quantity Available: {{isSoldOut ? "None" : product.qty}}
      <!-- <p>product.user_id = {{product.user_id}}
      <p>current user's id = {{ $parent.getUserId()}} -->
      <br>
        <span v-if="product.user_id == $parent.getUserId()">
          <br>
          <a v-bind:href="`/products/${product.id}/edit`">Edit This Product</a>
          <br>
          <button v-on:click="deleteProduct()"> Delete This Product </button>
        </span>
      <p>∞</p>
      </div
  
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
      message: "Buy This Product & Support A Friend",
      // user_id: current_user.id,
      product: [],
      myStyle: {
        backgroundColor: "#d5eda1",
      },
    };
  },
  created: function () {
    this.showProducts();
  },
  computed: {
    isSoldOut: function () {
      return this.product.qty <= 0;
    },
  },
  methods: {
    showProducts: function () {
      console.log("Hello");
      console.log(this.$route);
      axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.product = response.data;
      });
    },
    deleteProduct: function () {
      console.log("Hi!");
      axios.delete(`api/products/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/products");
      });
    },
    buyProduct: function () {
      var params = {
        product_id: this.product.id,
        qty: this.product.qty,
      };
      console.log(this.product.product_id);
      axios
        .post("api/carted_products/", params)
        .then((response) => {
          console.log(response.data);
          this.carted_product.push(response.data);
          this.$router.push("/carted_products");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>