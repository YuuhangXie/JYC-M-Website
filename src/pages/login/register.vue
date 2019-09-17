<template>
  <div class="register">
    <div class="title">
    <i class="iconfont icon-left"></i>
      注册
    </div>
    <div class="info">
      短信验证码已发送到手机号{{this.$route.query.phone}}
    </div>
    <div class="box">
      <div class="code">
        <input type="text" placeholder="验证码">
        <button>重新获取</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="6~20位数字与字母组合" class="pwd">
        <i data-v-ed76bb8e="" class="iconfont icon-shanchu" style="display: none;"></i>
        <i data-v-ed76bb8e="" class="iconfont icon-kaiyan"></i>
      </div>
      <div class="invite">
        <input type="text" placeholder="邀请人注册手机号(选填)">
      </div>
      <button>注册</button>
      <p data-v-ed76bb8e="" class="xieyi">
        <i data-v-ed76bb8e="" class="iconfont icon-yuanhui active"></i>
        我已阅读并同意
        <a data-v-ed76bb8e="" href="/agreement/register" class="">《聚优财平台注册服务协议》</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.title = '注册'
  },


}
</script>

<style lang="stylus" scoped>
@import url('~assets/styles/iconfont.css')
  .register
    width 100%
    height 100%
    overflow hidden
    background-color #fff
    .title
      height .43rem
      font-size .18rem
      color #333
      text-align center
      line-height .43rem
      position relative
      margin-bottom .3rem
      i 
        position absolute
        font-size .16rem
        top .0rem
        left .1rem
    .info
      font-size .18rem
      color #333
      line-height 1em
      text-align center
    .box
      padding .75rem .35rem
      .code
        position relative
        input 
          width 100%
          height .4rem
          line-height 10.667vw
          font-size 5.333vw
          border 0
          border-bottom 1px solid #eaeef3
        button 
          position absolute
          right 0
          top .533vw
          width 21.333vw
          height 8vw
          border-radius 1.067vw
          border 0
          font-size 3.733vw
          color #fff
          background #0af
      input 
        height 10.667vw
        line-height 10.667vw
        width 100%
        font-size 5.333vw
        border 0
        border-bottom 1px solid #eaeef3
        margin-bottom 8vw
</style>