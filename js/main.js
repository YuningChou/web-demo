var header = new Vue({
  el: '#header',
  /*data: {
    brandLogo : 'logo.png',
    brand: 'Hello Fine!',
    idxUrl: 'index.html'
  },*/
  components: {
    'nav-menu': httpVueLoader('template/header.vue')
  }
})