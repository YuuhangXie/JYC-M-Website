<template>
  <div class="midBanner">
    <div class="swiper-container-mid">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in middleBanner">
          <img :src="item.iconUrl" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      // swiper settings
      this.mySwiper = new Swiper('.swiper-container-mid', {
        init: false,
        autoplay: true,
        loop: this.middleBanner.length > 1,
      })
    },
    props: ['middleBanner'],
    watch: {
      middleBanner() {
        // until images updated, swiper render init
        this.$nextTick(function () {
          this.mySwiper.init()
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .midBanner
    height 1rem
    width 100%
    overflow hidden
    img
      width 100%
      height 1rem
</style>