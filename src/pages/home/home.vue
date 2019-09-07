<template>
  <div class="home">
    <header>
      <span>聚优财</span>
      <svg id="icon-xiaoxi" viewBox="0 0 1024 1024">
        <path d="M836.1 188v483.1H617L599.6 688l-85.7 82.9-88.7-83.5-17.3-16.3H188V188h648.1m60-60H128v603.1h256l130.4 122.7 126.9-122.7h254.8V128z" fill="#333333"></path>
        <path d="M389 384.7H289v100h100v-100zM561.3 384.7h-100v100h100v-100zM732.5 384.7h-100v100h100v-100z" fill="#333333"></path>
      </svg>
    </header>
    <banner :banners="banners" v-if="banners.length > 0"></banner>
  </div>
</template>

<script>
  import api from 'utils/api'
  import banner from 'components/homeBanner'

  export default {
    async mounted() {
      document.title = '首页'
      let homeData = await api.home({url: '/api/home'})
      this.banners = homeData.topBanner
    },
    data() {
      return {
        banners: []
      }
    },
    components: {
      banner
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/styles/border.styl"
  .home
    display flex
    flex-direction column
    height 100%
    header
      width 100%
      height 0.44rem
      background-color #fff
      position fixed
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
</style>