<template>
  <div class="item" @click="handleClick(list.productId)">
    <h2>
      {{list.title}}
      <span>{{list.tag}}</span>
    </h2>
    <div class="rate">
      <span>{{Number(list.rate).toFixed(2)}}%</span>
    </div>
    <div class="precent">
      <p class="desc">
        <span>预期利率(年化)</span>
        <i class="iconfont icon-question"></i>
      </p>
    </div>
    <div class="content-date">
      <div class="date">{{list.dueTime}}{{list.dueTimeType}}</div>
      <div class="progressbar">
        <div class="progressbar-progress">
          <div class="progress" :style="{width: list.payProgress + '%'}"></div>
        </div>
        <p class="progressbar-num">{{list.payProgress}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],

    methods: {
      handleClick(id) {
        this.$router.push('/detail/' + id)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .item
    padding .12rem 0 .16rem .15rem
    border-bottom 1px solid #f6f7f9
    position relative
    h2
      color #666
      font-size .14rem
      line-height 1em
      font-weight normal
      span
        margin-left .03rem
        color #fe6729
        background #ffeee7
        font-size .12rem
        line-height 1em
    .rate
      margin-top .2rem
      width 1.74rem
      color #fe6729
      font-size .27rem
      line-height 1em
    .desc
      padding-top .05rem
      span
        font-size .12rem
        line-height 1em
        color #666
        margin-right .04rem
      i
        font-size .12rem
        color #666
    .content-date
      position absolute
      left 1.85rem
      top .45rem
      .date
        font-size .15rem
        color #666
        line-height 1em
      .progressbar
        padding-top .14rem
        display flex
        .progressbar-progress
          width .8rem
          height .02rem
          background-color #f6f7f9
          margin-top .1rem
          margin-right .04rem
          position relative
          .progress
            position absolute
            left 0
            top 0
            height 100%
            border-radius 1.6vw
            background #0af;
        .progressbar-num
          color #999
          font-size .12rem
          line-height 1em
          margin-top .05rem
</style>