<template>
  <div class="product">
    <header class="nav">
      <i class="iconfont icon-left" @click="goback"></i>
      <span>投资</span>
    </header>
    <div class="gray"></div>
    <div class="product-wrap">
      <span class="more">更多</span>
      <h2>懒人投资</h2>
      <h3>乐轻松，从一键委托开始</h3>
      <div class="product-list">
        <item v-for="(list, index) in lazyList" :key="index" :list="list"></item>
      </div>
    </div>

    <div class="gray"></div>
    <div class="product-wrap">
      <span class="more">更多</span>
      <h2>优选产品</h2>
      <h3>享收益，从自主选择出发</h3>
      <div class="product-list">
        <item v-for="(list, index) in productList" :key="index" :list="list"></item>
      </div>
    </div>

    <div class="gray"></div>
    <div class="product-wrap">
      <span class="more">更多</span>
      <h2>转让专区</h2>
      <h3>悦安心，从灵活转出入手</h3>
      <div class="product-list">
        <item v-for="(list, index) in noviceList" :key="index" :list="list"></item>
      </div>
    </div>

    <help></help>

  </div>
</template>

<script>
  import api from 'utils/api'
  import item from 'components/product/productItem'
  import help from 'components/common/help'

  export default {
    beforeCreate() {
      document.title = '投资列表'
    },

    async created() {
      let productList = await api.get({url: '/api/product/list'})
      this.lazyList = productList.lazyList
      this.productList = productList.productList
      this.noviceList = productList.noviceList
    },

    data() {
      return {
        lazyList: [],
        productList: [],
        noviceList: []
      }
    },

    components: {
      item,
      help
    },

    methods: {
      goback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~assets/styles/border.styl'

  .product
    padding-top .44rem
    .nav
      width 100%
      height .44rem
      position fixed !important
      z-index 9999
      top 0
      background-color #fff
      border1px(0 0 1px 0, #eaeef3)
      i
        position absolute
        top 50%
        left .15rem
        transform translateY(-50%)
        font-size .16rem
        color #333
      span
        color #333
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        font-size .18rem
    .gray
      height .1rem
      background-color #f6f7f9
    .product-wrap
      padding .24rem 0 0
      position relative
      h2
        color #333
        font-size .18rem
        padding-left .15rem
        line-height 1em
      h3
        color #999
        font-size .12rem
        padding .07rem 0 0 .15rem
        line-height 1em
        font-weight normal
      span
        position absolute
        right .15rem
        top .3rem
        color #999
        font-size .14rem
      .product-list
        margin-top .1rem
        border-top 1px solid #f6f7f9
        height auto

</style>