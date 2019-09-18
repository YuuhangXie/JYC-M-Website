<template>
  <div class="top-info">
    <div class="top-user" @click="handleLogin">
      <i></i>
      <span>{{this.$store.state.userInfo.isSignin ? this.$store.state.userInfo.phone : '登录'}}</span>
    </div>
    <div class="top-user-level">
      <div class="level-box-left">
        <span>会员等级</span>
        <i>--</i>
      </div>
      <div class="level-box-right">
        <span>积分</span>
        <i>--</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleLogin() {
        if(!this.$store.state.userInfo.isSignin)
          this.$router.push('/isregister')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .top-info
    height 1.36rem
    padding .15rem
    background url("https://m.jyc99.com/static/img/top.420cbc9.png") 50%/cover
    .top-user
      line-height 1em
      i
        display inline-block
        vertical-align middle
        font-size 0
        width .2rem
        height .2rem
        background url('data:image/png;base64,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') 50%/cover
      span
        font-size .16rem
        color #fff
        margin-left .1rem
        vertical-align middle
    .top-user-level
      padding .32rem 0 0 .32rem
      display flex
      .level-box-left
        width 1.95rem
        display flex
        flex-direction column
      .level-box-right
        display flex
        flex-direction column
      div>span
        font-size .12rem
        color #fff
        line-height 1em
        margin-bottom .08rem
      div>i
        font-size .18rem
        line-height 1em
        color #fff
</style>