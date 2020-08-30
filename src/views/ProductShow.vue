<template>
  <div class="product-show">
    <h1>{{ message }}</h1>
      <br>
      <br>
      <b>{{product.name}}</b>
      <br>
      <br>
      {{product.description}}
      <br>
      <br>
      <img v-bind:src="product.image_url" width="400px">
      <br>
      <p>product.user_id = {{product.user_id}}
      <p>current user's id = {{ $parent.getUserId()}}
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
      message: "Showing One Product!",
      // user_id: current_user.id,
      product: [],
    };
  },
  created: function () {
    this.showProducts();
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
  },
};
</script>