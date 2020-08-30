<template>
  <div class="products-edit">
    <!-- <form v-on.submit.prevent="editProduct()"> -->
    <h1>{{ message }}</h1>
    <h3> {{product}} </h3>
   

    <div class="form group">
      <label> Name </label>
      <input type="text" class="form-control" v-model="product.name">
    </div> 
    <div class="form group">
      <label> Description </label>
      <input type="text" class="form-control" v-model="product.description">
    </div> 
    <div class="form group">
      <label> Image </label>
      <input type="text" class="form-control" v-model="product.image">
    </div> 
    <div class="form group">
      <label> Price </label>
      <input type="text" class="form-control" v-model="product.price">
    </div> 
    <div class="form group">
      <label> Cause ID </label>
      <input type="text" class="form-control" v-model="product.cause_id">
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
    };
  },
  methods: {
    editProduct: function () {
      var params = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
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