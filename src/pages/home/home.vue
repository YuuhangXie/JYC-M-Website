<template>
  <div class="home" @scroll="handleScroll">
    <header>
      <span v-if="showTitle">聚优财</span>
      <svg id="icon-xiaoxi" viewBox="0 0 1024 1024">
        <path d="M836.1 188v483.1H617L599.6 688l-85.7 82.9-88.7-83.5-17.3-16.3H188V188h648.1m60-60H128v603.1h256l130.4 122.7 126.9-122.7h254.8V128z" fill="#333333"></path>
        <path d="M389 384.7H289v100h100v-100zM561.3 384.7h-100v100h100v-100zM732.5 384.7h-100v100h100v-100z" fill="#333333"></path>
      </svg>
    </header>
    <banner :banners="banners"></banner>
    <navlist :platformData="platformData"></navlist>
    <div class="gray"></div>
    <welfare></welfare>
    <div class="product">
      <productCard :productList="productList"></productCard>
    </div>
    <div class="gray"></div>
    <midBanner :middleBanner="middleBanner"></midBanner>
    <div class="gray"></div>
    <media :mediaList="mediaList"></media>
    <div class="gray"></div>
    <homeBottom></homeBottom>
    <div class="home-bottom-safety">
      <img src="data:image/png;base64,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">
      <span >银行存管 资金安全有保障</span>
    </div>
  </div>
</template>

<script>
  import api from 'utils/api'
  import _ from 'lodash'

  import banner from 'components/home/banner'
  import navlist from 'components/home/nav'
  import welfare from 'components/home/welfare'
  import productCard from 'components/home/productCard'
  import midBanner from 'components/home/midBanner'
  import media from 'components/home/media'
  import homeBottom from 'components/home/bottom'

  export default {
    beforeCreate() {
      document.title = '首页'
    },

    async mounted() {
      window.addEventListener('scroll', this.handleScroll, true);
      let homeData = await api.get({url: '/api/home'})

      this.banners = homeData.topBanner
      this.platformData = homeData.platformData
      this.productList = homeData.productList
      this.middleBanner = homeData.middleBanner
      this.mediaList = homeData.mediaList
    },
    data() {
      return {
        banners: [],
        platformData: {},
        productList: [],
        showTitle: false,
        middleBanner: [],
        mediaList: []
      }
    },
    components: {
      banner,
      navlist,
      welfare,
      productCard,
      midBanner,
      media,
      homeBottom
    },
    methods: {
      handleScroll: _.throttle(function(e) {
        if(e.srcElement.scrollTop > 190) {
          this.showTitle = true
        }else {
          this.showTitle = false
        }
      }, 100)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/styles/border.styl"
  .home
    display flex
    flex-direction column
    padding-top .44rem
    header
      width 100%
      height 0.44rem
      background-color #fff
      position fixed !important
      top 0
      z-index 9999
      display flex
      justify-content center
      align-items center
      border1px(0 0 1px 0, #ebedf0)
      span
        font-size 0.18rem
        color #333
      svg
        position absolute
        right 0.35rem
        width 0.2rem
        height 0.2rem
    .gray
      height .1rem
      background-color #f6f7f9
    .product
      width 100%
      height: 2.3rem
      overflow-x auto
    .white
      width 2.1rem
      height 5rem
      background-color #fff
    .home-bottom-safety
      display flex
      justify-content center
      background-color #f6f7f9
      padding .18rem 0 .33rem
      img
        width .16rem
        height .17rem
      span
        font-size .12rem
        color #999
        padding-left .05rem
</style>