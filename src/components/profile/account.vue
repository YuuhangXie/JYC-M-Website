<template>
  <div class="profile-account">
    <div class="account-mine">存管账户</div>
    <div class="account-operate">
      <span>- -</span>
      <i class="account-operate__link van-icon van-icon-arrow"></i>
      <em>立即开通</em>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  @import "~assets/styles/iconfont.css"

  .profile-account
    padding .185rem
    display flex
    justify-content space-between
    .account-mine
      font-size .16rem
      color #666
      line-height 1em
    .account-operate
      span
        font-size .15rem
        color #666
        padding-right .1rem
      i
        display inline-block
        font-size 3.2vw
        margin-right 2.667vw
        color #eaeef3
        vertical-align baseline
      em
        color #0af
        font-size .15rem

</style>