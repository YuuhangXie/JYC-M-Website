<template>
  <div>
    <div class="profile-top"></div>
    <div class="unsign-a">
      <h1>注册就送<em>668红包</em></h1>
      <h3>银行监管 资金安全有保障</h3>
      <button @click="login">{{this.$store.state.userInfo.isSignin ? '欢迎您' : '注册/登录'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      if(!this.$store.state.userInfo.isSignin)
        this.$router.push('/isregister')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .profile-top
    height .44rem
    background-color #fff
  .unsign-a
    width 100%
    height 1.84rem
    background: #fff url('https://m.jyc99.com/static/img/mine_banner_bg.e476b40.png') no-repeat bottom/contain;
    h1
      padding-top .125rem
      color #333
      font-size .23rem
      text-align center
      font-weight 400
      line-height 1em
      em
        color #ee6723
        margin-left .07rem
        font-weight: 700
    h3
      margin-top .155rem
      font-size .14rem
      color #999
      text-align center
      line-height 1em
      font-weight normal
    button
      margin .175rem 1.29rem
      width 1.17rem
      height .34rem
      line-height 9.067vw
      background-image linear-gradient(-132deg,#0070ff,#0af)
      border-radius 4.533vw
      text-align center
      color #fff
      font-size 4.8vw
      letter-spacing 1px
      border 0
</style>