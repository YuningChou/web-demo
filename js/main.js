var header = new Vue({
  el: '#header',
  /*data: {
    brandLogo : 'logo.png',
    brand: 'Hello Fine!',
    idxUrl: 'index.html'
  },*/
  components: {
    'nav-menu': httpVueLoader('header.vue')
  }
})
var footer = new Vue({
  el: '#footer',
  components: {
    'foot-info': httpVueLoader('footer.vue')
  }
})
var slider = new Vue({
  el: '#slider',
  data: {
    items: [
      { link: 'https://www.finemifi.com/' , img: '../img/slider1.jpg' },
      { link: 'https://www.google.com/?hl=zh-tw' , img: '../img/slider2.jpg' },
      { link: 'https://tw.yahoo.com/' , img: '../img/slider3.jpg' },
      { link: 'https://www.finemifi.com/' , img: '../img/slider4.jpg' },
      { link: 'https://www.finemifi.com/' , img: '../img/slider5.jpg' }
    ]
    
  }
})

var apiURL = 'http://yn-chou.com/json/product.json';
var product = new Vue({
  el: '#products',
  data: {
    products: [
      //{ name: '日本4G無限上網卡 預付卡 5天' , link: 'https://www.finemifi.com/' , img: '../img/product_img1.jpg' , price: '399' },
      //{ name: '日本4G無限上網卡 預付卡 8天' , link: 'https://www.finemifi.com/' , img: '../img/product_img2.jpg' , price: '399' },
      //{ name: '泰國8天 4G 上網卡 2.5GB (無限流量2G)' , link: 'https://www.finemifi.com/' , img: '../img/product_img3.jpg' , price: '399' },
      //{ name: '澳亞 8天 多國 4G / 3G 通用上網卡' , link: 'https://www.finemifi.com/' , img: '../img/product_img4.jpg' , price: '399' },
      //{ name: '香港澳門 8天 通用 4G / 3G 上網卡' , link: 'https://www.finemifi.com/' , img: '../img/product_img1.jpg' , price: '399' },
      //{ name: '韓國 4G/3G 上網卡 8天' , link: 'https://www.finemifi.com/' , img: '../img/product_img1.jpg' , price: '399' },
      //{ name: '美國/加拿大/墨西哥4G上網卡15 天無限流量不降速' , link: 'https://www.finemifi.com/' , img: '../img/product_img1.jpg' , price: '399' },
      //{ name: '美國/加拿大/墨西哥4G上網卡15 天無限流量不降速' , link: 'https://www.finemifi.com/' , img: '../img/product_img1.jpg' , price: '399' },
    ]
    
  },
  mounted: function(){
    $.ajax({
     url:'https://gist.githubusercontent.com/YuningChou/9d64bcbf12266175cdbadeee21266c9a/raw/5e06d1040cce7c6e187f515fa75d4c8918fca696/gist.json',
     success: function(result){
      console.log('success');
       product.products = JSON.parse(result)
       console.log(result)
     },
     error: function(result){
       alert("沒撈到")
     }
    }) 
   }
})