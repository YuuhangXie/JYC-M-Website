<template>
  <div class="register">
    <div class="title">
    <i class="iconfont icon-left" @click="handleBack"></i>
      登录
    </div>
    <div class="info">
      聚优财
    </div>
    
    <div class="box">
      <div class="pwd">
        <input :type="pwdType" placeholder="请输入登录密码" class="pwd" v-model="pwdInput">
        <i :class="{iconfont: true, 'icon-shanchu': isDelete}" @click="handleDelete"></i>
        <i :class="{'iconfont': true, 'icon-biyan': !showPwd, 'icon-kaiyan': showPwd}" @click="isShowPwd"></i>
      </div>
      <div class="code">
        <input type="number" placeholder="验证码" v-model="codeInput">
        <button @click="getCode" :disabled="codeComplete" :class="{recode: reSet}">{{this.timeSpace ? (this.timeSpace + 's后重发') : '重新获取'}}</button>
      </div>
      <button :class="{active: submitActive}" @click="handleSubmit">登录</button>
      <p class="xieyi">
        <i class="iconfont icon-yuanhui active"></i>我已阅读并同意<a href="javascript:void(0)" class="">《聚优财平台注册服务协议》</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document.title = '登录'
  },

  mounted() {
    if(this.timeSpace === 0) {
      this.reSet = true
      this.timeSpace = 5
      this.time = setInterval(() => {
        if(this.timeSpace) {
          this.timeSpace --
          this.timeSpace === 0 ? this.reSet = false : ''
        } else {
          clearInterval(this.time)
        }
      }, 1000)
    }
  },

  data() {
    return {
      timeSpace: 0,
      codeComplete: false,
      reSet: false,
      pwdType: 'password',
      pwdInput: '',
      codeInput: '',
      showPwd: false,
      isDelete: false
    }
  },

  computed: {
    submitActive() {
      if(this.pwdInput.length >= 6 && this.codeInput >= 4) {
        return true
      } else {
        return false
      }
    }
  },

  watch: {
    pwdInput() {
      if(this.pwdInput.length > 0) {
        this.isDelete = true
      } else {
        this.isDelete = false
      }
    }
  },

  methods: {
    handleBack() {
      this.$router.go(-1)
    },

    handleDelete() {
      this.pwdInput = ''
      this.showPwd = false
    },

    getCode() {
      if(this.timeSpace === 0) {
        this.reSet = true
        this.timeSpace = 5
        this.time = setInterval(() => {
          if(this.timeSpace) {
            this.timeSpace --
            this.timeSpace === 0 ? this.reSet = false : ''
          } else {
            clearInterval(this.time)
          }
        }, 1000)
      }
    },

    handleSubmit() {
      if(this.pwdInput.length >= 6 && this.codeInput >= 4)
        this.$store.dispatch('verifyUser', {phone: this.$route.query.phone})
        this.$router.go(-2)
    },

    isShowPwd() {
      this.showPwd = !this.showPwd
      this.pwdType = this.showPwd ? 'text' : 'password'
    }
  }
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
      font-size .27rem
      color #333
      line-height 1em
      padding-left .35rem
    .box
      padding .65rem .35rem
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
          &.recode
            color #fff !important
            background #ccc !important
      input 
        height 10.667vw
        line-height 10.667vw
        width 100%
        font-size 5.333vw
        border 0
        border-bottom 1px solid #eaeef3
        margin-bottom 8vw
        color #666
      .pwd
        position relative
        i 
          position absolute
          right 0
          top .06rem
          color #cccccc
          font-size .16rem
        .icon-shanchu
          right .28rem
      button 
        display block
        width 100%
        height .44rem
        background #ccc
        box-shadow 0 2.133vw 1.067vw hsla(0,0%,93%,.6)
        border-radius 1.067vw
        font-size 4.8vw
        text-align center
        color #fff
        border 0
        &.active
          background linear-gradient(90deg,#0071ff,#0af) !important
          box-shadow 0 2.133vw 1.067vw rgba(160,204,253,.6) !important
      .xieyi
        margin-top 4vw
        color #999
        font-size 3.733vw
        text-align center
        line-height 1em
        padding 0
        i.active 
          color #0af
</style>