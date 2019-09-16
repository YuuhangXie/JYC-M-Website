<template>
  <div class="more">
    <div class="nav">
      <p>媒体报道</p>
      <i data-v-e5fd4df0="" class="iconfont icon-left" @click="handleClick"></i>
    </div>
    <newslist v-for="(news, index) in newsList" :key="index" :news="news"></newslist>
  </div>
</template>

<script>
  import newslist from "../../components/common/newslist"
  import api from 'utils/api'
  export default {
    async beforeCreate() {
      let data = await api.get({ url: 'api/home/mediaList?pageNum=1&pageSize=100' })
      this.newsList = data.mediareportList
      console.log(this.newsList)
    },

    data() {
      return {
        newsList: []
      }
    },

    components: {
      newslist
    },

    methods: {
      handleClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/styles/iconfont.css"

  .more
    width 100%
    height 6.67rem
    background-color #fff
    overflow auto
    padding 0 .15rem
    padding-top .44rem
    .nav
      width 100%
      height .44rem
      background-color #fff
      position fixed !important
      top 0
      left 0
      border-bottom 1px solid #f6f7f9
      display flex
      justify-content center
      align-items center
      z-index 999
      p
        color #333
        font-size .18rem
      i
        position absolute
        left .2rem
        z-index 9999

</style>