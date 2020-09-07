<template>
  <div class="products-index">
    <div id="main">
						<div class="inner">
							<header>
								<h1>Products For Sale</a>.</h1>
								<p>Buy a product, support a friend.</p>
							</header>
							<section class="tiles" >
								<article class="style3" v-for="product in products">
									<span class="image">
										<img v-bind:src="product.image_url" width="300px" height="300px">
                  <p><router-link v-bind:to="/products/ + product.id" tag="button">Show More Information</router-link></p>
									</span>
										<h2>{{product.name}}</h2>
										<div class="content">
											<p>{{product.description}}</p>
										</div>
									</a>
								</article>
								<!-- <article class="style2">
									<span class="image">
										<img src="/images/pic02.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Lorem</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="/images/pic03.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Feugiat</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style4">
									<span class="image">
										<img src="/images/pic04.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Tempus</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style5">
									<span class="image">
										<img src="/images/pic05.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Aliquam</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style6">
									<span class="image">
										<img src="/images/pic06.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Veroeros</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a> -->
								<!-- </article> -->
							</section>
						</div>
					</div>
    <!-- <div v-for="product in products">

      <br> 
      <br>
      <b><a v-bind:href="`/products/${product.id}`">{{product.name}}</a></b>
      <br>
      <br>
      <b>Description</b> {{product.description}}
      <br>
      <br>
      <b>Price</b> ${{product.price}}.00
      <br>
      <br>
      <b>Cause You Are Benefitting: <b><a v-bind:href="`/causes/${product.cause_id}`">{{product.cause_name}}</a></b> </b> 
      <br>
      <br>
      <img v-bind:src="product.image_url" width="300px">
      <p>∞</p>
      </div>
  
  </div> -->
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