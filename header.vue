<template>
    <nav class="navbar navbar-expand-lg  fixed-top"  v-bind:style="[base, custom]">
        <div class="container">
          <a class="navbar-brand" :style="navbarBrand" :href="idxUrl"><img :src="'img/'+ brandLogo" style="width:80px">{{brand}}</a>
          <button class="navbar-toggler d-none d-lg-block d-xl-none" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link url" href="#one">首頁</a>
              </li>
              <li class="nav-item">
                <a class="nav-link url" href="#two">產品</a>
              </li>
              <li class="nav-item">
                <a class="nav-link url" href="#three">常見問題</a>
              </li>
              <li class="nav-item">
                <a class="nav-link url" href="#four">購物車</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">手機版</a>
              </li>
            </ul>
          </div>
          <a href="#" class="order_btn">我要預約</a>
        </div>
      </nav>
</template>

<script>
module.exports = {
  data: function() {
    return {
        brandLogo : 'logo.png',
        brand: 'Hello Fine!',
        idxUrl: 'index.html',
        base: { background: '#034e9e'},
        custom: { background: ''},//#7E1183 燦星紫
        navbarBrand: { color: '#FFEB3B'}
      }           
    }
}

</script>

<style> 
.navbar{
  padding:3px 0;
  background: #034e9e;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
}
.navbar-brand {
    margin: 0 auto;
}
.navbar-nav .nav-link{
  color:white;
}
.navbar-nav li:hover {
  background: #003f82;
}
.navbar-nav li:hover a{
  color: white;
}
.navbar-nav > li > a:focus {
  background:#003f82;
}
.order_btn {
  background: #ff5c5c;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  margin: 0 20px;
  font-weight: bold;
}
.order_btn:hover{
  background: #ff3838;
  text-decoration: none;
  color:white;
}
</style>