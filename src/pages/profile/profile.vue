<template>
  <div class="profile">
    <unsign></unsign>

    <account></account>

    <div class="gray" style="background-color: #f6f7f9; height: .1rem"></div>

    <profileBar></profileBar>

    <div class="gray" style="background-color: #f6f7f9; height: .1rem"></div>

    <profileNav></profileNav>

    <help></help>
  </div>
</template>

<script>
  import unsign from 'components/profile/unsign'
  import account from 'components/profile/account'
  import profileBar from 'components/profile/profileBar'
  import profileNav from 'components/profile/profileNav'
  import help from 'components/common/help'

  export default {
    beforeCreate() {
      document.title = '聚优财官网(原聚有财升级) - 稳健，规范，安全的互联网金融理财服务平台 - 优生活 优选择！'
    },

    async created() {

    },

    components: {
      unsign,
      account,
      profileBar,
      profileNav,
      help
    }
  }

</script>