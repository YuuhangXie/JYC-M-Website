<template>
  <div class="profile-bar">
    <div class="product-bar">
      <div class="bar-left">
        <i></i>
        <span>优选产品</span>
      </div>
      <div class="bar-right">
        <span>享收益，从自主选择出发</span>
        <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
      </div>
    </div>

    <div class="product-bar">
      <div class="bar-left">
        <i class="icon2"></i>
        <span>懒人投资</span>
      </div>
      <div class="bar-right">
        <span>乐轻松，从一键委托开启</span>
        <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "~assets/styles/iconfont.css"
  @import "~assets/styles/border.styl"

  .product-bar
    padding .15rem .16rem
    line-height 1em
    position relative
    display flex
    justify-content space-between
    border1px(0 0 1px 0, #ddd)
    .bar-left
      i
        position relative
        display inline-block
        top 1.067vw
        width 5.333vw
        height 4.533vw
        margin-right .15rem
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAiCAYAAAAtZZsLAAAAAXNSR0IArs4c6QAAA7lJREFUWAnFWEloE2EUfm8mta1bKYq7COJBkLY0Uy9itS64VdFL9SCCpRYPnhS3Qy1DElpUcLuJIm7Fg3hyQ3FJUyhFaEAF6wIWafXgbrWpNcn8vhf8JdPMZDJdkgfDm/9728e/zyDYyPLOxlohRJMAGG/jMiowAkRAgUMhr/+yVUKyp8qK8JGymIAnIMS4VOvoI4gwCAIXhyr8z4dmV4YCVd16QcyAlmyR4/pCQD6plvVvzrA2SQpB40v8KIUsMnlloSFAlPzq+9w8tJRpiCs7G9cCGHdBgAkfGjRmbQShomdN0Ks/kDX+E1nV1TQl2h95TotipjTmQtN8fF9Y4Cm9t0j/yvU9kkQ0MnAuE3KT1UKYNq5IhrnSn6J98CMWSRtD83F2ZCB+lpxq2DHRg8vCjXXCMM6njfxn3DhVg4PztmTimuJzuuc23PjYkYJbAoi1bZr/olLVqS+gZXTK0imXoBBnVj/T53viIn6RVu3EXHKxqT1pMBq/QHNQlNo4WMLhn2/B133d0uYEvux/7+Ritgso9yiKstsQBm3MmW0tHwa/AT9jLrzlAOxRWr2+ayhg75gXdFlAQdwf1PxXEydJqCJwmnoyZRd3mXP03BGPtXr9Jzjh/42aG5WdDRdoqGv5PVeCgJdbNd9ORBpXEtNZPMNbWk+Gmzkkd0fR1DpJLoXgddwanz6teBsdN+3ZJkk1O4pArQmiHkuubRpiaah+1lzc9yfSlq1bDfVYV2GBulSev5IHa0uCbKh6qs8xorF2mghzuT1WQnOuF/Lzl4RKGnqsapjmYLJDsEzvJfp0/cLErSLZNnrv+DVPUdfakeM6tgTZGNICXSqq1UQy/RWEnd3LAKrqpode/UW60LQEOTCo6R2oihoaCtPkTZfUyca5VIStoXLdcTE6EuRiofLAHerFXTTkib3JiYCTXSDUB7XALSc/tmdEkB1DFb5LCuBhfh+J0BF2iO95meawXcV2Cei75QQIY3hnNyon2zTfPrvcVrhrgvQxj8vDR67Q1Xy7VUI7jDbiFjpfdySfEna+yXjGQyyDuMBCMbeW9D2JOWn2/Rfjeg677kFJZs3T4xN+x/oeU48ulpiVpgJPCvKKVt4vO9BvZXfCXPegTMgFFaFuoNX9WmKpGl8p4KkeLjnON+welGRWhgPzomKwnT68ZkksoRE/5GH+kkfehncm3GVj2D0o6zABurmto3n2XWL8zthIyXG+ERPkJIm/UqhuTpBE+EZDv8nqTxX75lSqhO7hJ6cksl38L2I6IVuufuTkAAAAAElFTkSuQmCC') no-repeat
        background-size contain
      .icon2
        background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAAXNSR0IArs4c6QAAAltJREFUWAntlm1ojWEYx3+3nZk1zIllXmvKe2o++LAiEkqJjfmwiJwvizBRhw8+LC1E+KCI1lby9om1EqI0yUnZt6OjJi/JorwUy7Bxe+5ndd/ndM7zNj3rlHPX6flf1333v/7P9b+vpyP+NM6X5NEalUdabCkFQV6O/KcdqqmF+oMwfpJXg4h4nvjXA2sbERuabBZZMQPO73ZlDNeymQtg3S4jIFppsAMKT1BxCcROIoqK7dJSWp+7m6cdZJj08AWVlRuWXGhTHFFZZXYeXIbUYxM7oOHdofhVxKxq5PtXcGwz/PyeSb9wGWJFg87J3hdw45SO3UDwDi1vsMUoUrsDO89aQJgaZRNgW4uO5eAvaLcmTD19rGCColOgdl8GrZhXA3UHTG7rEUR5hYk7LcFvUyb2QP4tU13YcRxROi6LUqyJWfa9tPNi8Sq9L3uewr02HfsB/gWtjiHmLNGcsqcbqhYhIqOHcluaLVsGzH5/n2XVIVDTFWD5s2z6XFi/R9PKrx/hwl640qxzoiiCKCnVMdete/S518Q+kbcg1YHYCdMJRXzpMPR9gUQH8m5rVinZfQeedGbl/SS8Lavbj5g6W3PJrmuQfKhjOs5gm7K0HtR4P3sE99vNfkAkXP8xqglqarWmemis5YfX0LIRBn4ELOP/uLNlY8bC9qNGzO9BaIuHKkbJdhZUvRIRnWxe7dY5eJM0cUjIWVAqgez/ZpeVzxNw+2JIEjJp3e/QxGmgLnSyK/D3JLOM/8h9yj69A/UbweVs2QiKSC9VEJTejVy40KFcXUnP5V2H/gJ47YuQxi+1xAAAAABJRU5ErkJggg==') no-repeat
        position relative
        top 1.067vw
        width 4.8vw
        height 4vw
        background-size 100% !important
      span
        font-size .14rem
        line-height 1em
        color #323232
    .bar-right
      font-size .12rem
      color #999
      vertical-align middle
      .van-cell__right-icon
        vertical-align middle
        margin-top -.02rem
        display inline-block
        color #cfd8e8
        min-width 1em
        height .24rem
        font-size: .16rem
        line-height .24rem
</style>