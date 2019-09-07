<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners">
          <img :src="item.iconUrl" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      // swiper settings
      this.mySwiper = new Swiper('.swiper-container', {
        // init: false,
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },
    props: ['banners'],
    // watch: {
    //   banners() {
    //     // until images updated, swiper render init
    //     this.$nextTick(function () {
    //       this.mySwiper.init()
    //     })
    //   }
    // }
    }
</script>

<style lang="stylus" scoped>
  .banner
    height 1.8rem
    img
      width 100%
      height 1.8rem
</style>