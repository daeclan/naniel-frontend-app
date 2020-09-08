<template>
  <div class="home text-center" :style ="myStyle" id="wrapper">
    <br>
    <br>
    <br>
    <h1>{{ message }}</h1>
    <section class="page-section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">me & naniel in 2001</span>
            <span class="section-heading-lower">BACK IN MAINE</span>
          </h2>
          <p class="mb-3">My best friend, one of the kindest, most loving souls (Naniel, above left) on the planet got sick several years ago with Lyme Disease. The infection wasn't found quickly, which allowed the disease to rapidly mature & significantly effect my good friend. The treatments that work at this stage in his recovery are not always covered by insurance so this app was a way to encourage folks to help my friend find comfort and safety from this unforgiving disease.</p>
          <div class="intro-button mx-auto">
            <a class="btn btn-primary btn-xl" href="products">Browse Products & Support The Vision !</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="cta-inner text-center rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">sell a product</span>
              <span class="section-heading-lower">Help a Friend</span>
            </h2>
            <p class="mb-0">If CoronaVirus has shown us anything, it is that we have taken a lot of our creature comforts for granted. Many of us have collected some cool material over the years, the Naniel App allows you to trade one of those cool things in order to provide a creature comfort for someone in need.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome Home, friend.",
      myStyle: {
        backgroundColor: "#d5eda1",
      },
    };
  },
  created: function () {},
  methods: {},
};
</script>