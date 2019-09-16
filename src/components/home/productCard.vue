<template>
  <div class="product-card">
    <div class="card" v-for="(product, index) in productList" :key="index">
      <h2>{{product.title}}</h2>
      <div class="content">
        <p class="rate">
          <em>{{product.rate}}%</em>
          <span>预期利率(年化)<i class="iconfont icon-question"></i></span>
        </p>
        <p class="date">
          <i><em>{{product.dueTime}}</em>{{product.dueTimeType}}</i>
          <span>期限</span>
        </p>
      </div>
      <div class="buy-it" @click="handleClick(product.productId)">
        {{product.statusDisplay}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['productList'],

    methods: {
      handleClick(id) {
        this.$router.push('/detail/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .product-card
    padding-top .25rem
    padding-left .15rem
    display flex
    width 100%
    .card
      flex-shrink 0
      width 3.25rem
      height 1.9rem
      padding-top .18rem
      margin-right .1rem
      box-shadow: 0 0 2.667vw 0 #e1ebf0;
      border-radius .04rem
      h2
        font-size .15rem
        line-height 1em
        color #666
        padding-left .25rem
      .content
        padding .26rem 0 0 .25rem
        display flex
        .rate
          width 1.98rem
          display flex
          flex-direction column
          em
            font-size .31rem
            color #fe6729
            line-height 1em
          span
            padding-top .1rem
            font-size .12rem
            line-height 1em
            color #999
            i
              margin-left .04rem
              font-size .12rem
        .date
          display flex
          flex-direction column
          i
            font-size .18rem
            color #333
            em
              font-size .31rem
              line-height 1em
          span
            padding-top .1rem
            font-size .12rem
            line-height 1em
            color #999
    .buy-it
      margin .24rem .65rem 0
      font-size .16rem
      width 2rem
      height .35rem
      background linear-gradient(90deg,#0087ff,#0af);
      border-radius .35rem
      color #fff
      text-align center
      line-height .35rem

</style>