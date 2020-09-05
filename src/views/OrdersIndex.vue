<template>
  <div class="orders-index">
    <h1>{{ message }}</h1>
    <div v-for="order in orders">

      <br>
      {{order.products}}
      <br>
      <b><a v-bind:href="`/orders/${order.id}`">{{order.name}}</a></b>
      <br>
      
      <br>
      <b>User ID</b> {{order.user_id}}
      <br>
      <b>Subtotal:</b> {{order.subtotal}}
      <br>
       <b>Tax</b> {{order.tax}}
      <br>
      <b>Total</b> {{order.total}}
      <br>
      <p>∞</p>
      </div>
      <button v-on:click="apiLink()"> Hypothetical API Link </button>
  
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
      message: "confirm your order",
      orders: [],
    };
  },
  created: function () {
    this.indexOrders();
  },
  methods: {
    indexOrders: function () {
      console.log("Hello");
      axios.get("/api/orders").then((response) => {
        console.log(response);
        this.orders = response.data;
      });
    },
    apiLink: function () {
      console.log("Hi!");
    },
  },
};
</script>