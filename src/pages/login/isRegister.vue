<template>
  <div class="is-register">
    <i class="iconfont icon-guanbi" @click="handleBack"></i> 
    <div class="jyc">聚优财</div>
    <div class="desc">让你放心&nbsp;财是对的</div>
    <input type="number" class="phone" maxlength="11" placeholder="请输入手机号码" v-model="phone">
    <button :class="{active: isComplete}" :disabled="!isComplete" @click="handleSubmit">下一步</button>
  </div>
</template>

<script>
import api from 'utils/api'

export default {
  beforeCreate() {
    document.title = '注册/登录'
  },

  data() {
    return {
      phone: '',
      isComplete: false
    }
  },

  watch: {
    phone() {
      if(this.phone.length === 11) {
        this.isComplete = true
      } else {
        this.isComplete = false
      }
    }
  },

  methods: {
    handleBack() {
      this.$router.go(-1)
    },

    async handleSubmit() {
      if(!this.isComplete) return false
      let result = await api.get({ url: `/api/user/mobileExist?userMobile=${this.phone}` })
      if(result.isRegister) {
        this.$router.push('/login')
      } else {
        this.$router.push(`/register?phone=${this.phone}`)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('~assets/styles/iconfont.css');
  .is-register
    width 100%
    height 100%
    overflow hidden
    padding .75rem .35rem
    line-height 1
    background-color #fff
    i 
      position absolute
      font-size .16rem
      top .15rem
      left .15rem
    .jyc
      font-size .27rem
      color #333
      margin-bottom .17rem
    .desc
      font-size .27rem
      color #333
      font-weight 700
      margin-bottom .65rem
    .phone
      display block
      width 3.05rem
      height .4rem
      font-size .2rem
      line-height .4rem
      border 0
      border-bottom 1px solid #eaeef3;
      background #fff
      margin-bottom .5rem
    button 
      width 3.05rem
      height .44rem
      background #cccccc
      color #fff
      border-radius 1.067vw
      border 0
      font-size 4.8vw
      text-align center
      box-shadow 0 2.133vw 1.067vw hsla(0,0%,93%,.6);
      &.active
        background linear-gradient(90deg,#0071ff,#0af)
        box-shadow 0 2.133vw 1.067vw rgba(160,204,253,.6)
</style>