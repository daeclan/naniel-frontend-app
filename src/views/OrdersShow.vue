<template>
  <div class="order-show text-center">
    <h1>{{ message }}</h1>
<!--     
    <h1>{{ carted_products.products[0] }}</h1>
    <div v-for="carted_product in carted_products">
      <br>
      {{carted_products.products[0]["id"]}}
      <br>
      <!-- {{ carted_products.products[counter].name}}  -->
      <!-- <h1 v-if="counter < carted_products.products.length">{{this.counter = this.counter+1}}</h1> -->
    <!-- </div> --> 
      <br>
      <br>
      <b><a v-bind:href="`/orders/${order.id}`">Order #{{order.id}}</a></b>
      <br>
      {{order.product}}
      <br>
      <b>User ID</b> {{order.user_id}}
      <br>
      <b>Subtotal:</b> ${{order.subtotal}}
      <br>
       <b>Tax</b> ${{order.tax}}
      <br>
      <b>Total</b> ${{order.total}}
      <br>
     
      <br>
       <button v-on:click="apiLink()"> Hypothetical API Link </button>
      <p>∞</p>
  </div>
</template>



<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "order confirmed",
      order: [],
      carted_products: [],
      counter: 0,
    };
  },
  created: function () {
    this.showOrder();
  },
  methods: {
    showOrder: function () {
      console.log("Hello");
      console.log(this.$route);
      axios.get(`/api/orders/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.order = response.data;
        this.carted_products = response.data;
      });
    },
    apiLink: function () {
      console.log("Hi!");
    },
    incrementCounter: function (index) {
      this.counter = ++this.counter;
    },
  },
};
</script>