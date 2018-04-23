<template>
    <footer v-bind:style="[base, custom]">
        <div class="container">
            <div class="footer_menu row">
            <div class="col-lg-2">
                <a class="navbar-brand" :href="idxUrl"><img :src="'img/'+ brandLogo" style="width:120px"></a>
            </div>
            <div class="col-lg-7 footer_info">
                <p>台北市信義區信義路5段5號6樓6E09室</p>
                <p>客服專線：（02) 8221-1828</p>
                <p>營業時間：週一到週五 09：00 ~ 18：00</p>
            </div>
            <div class="col-lg-3">
                <ul class="social">
                    <li><a href="#"><img src="img/fb_icon.png" style="width:50px"></a></li>
                    <li><a href="#"><img src="img/line_icon.png" style="width:50px"></a></li>
                    <li><img src="img/line_QR.jpg" style="width:80px"></li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
</template>

<script>
module.exports = {
  data: function() {
    return {
       brandLogo : 'logo.png',
       idxUrl: 'index.html',
       base: { background: '#034e9e'},
       custom: { background: ''},//#761a7a 燦星紫
      }           
    }
}

</script>

<style> 
    footer {
    width: 100%;
    z-index: 9999;
    bottom: 0;
    background:#034e9e;
    padding: 20px 0 0;
    margin-top:30px;
    }
    .footer_menu{
    padding-bottom:20px;
    }
    .footer_menu p{
    margin-bottom:0;
    color:white;
    }
    .copyright p{
    margin-bottom:0;
    color:white;
    text-align:center;
    }
    .social li{
    display:inline-block;
    float:left;
    margin:0 10px;
    }
    .copyright{
    width: 100%;
    z-index: 9999;
    bottom: 0;
    background:#003c7b;
    padding:5px;
    }
</style>