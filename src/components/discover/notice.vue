<template>
  <div class="notice">
    <span>系统公告</span>
    <div class="swiper-container-notice">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in noticeList">
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    mounted() {
      // swiper settings
      this.mySwiper1 = new Swiper('.swiper-container-notice', {
        init: false,
        direction: 'vertical',
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
      })
    },
    props: ['noticeList'],
    watch: {
      noticeList() {
        // until images updated, swiper render init
        this.$nextTick(function () {
          this.mySwiper1.init()
        })
      }
    }

  }
</script>

<style lang="stylus" scoped>
  .notice
    padding .13rem 0 .13rem .1rem
    display flex
    line-height 1em
    span
      font-size .14rem
      color #999
      margin-right .1rem
      flex-shrink 0
    .swiper-container-notice
      overflow hidden
      font-size .14rem
      height .14rem
</style>