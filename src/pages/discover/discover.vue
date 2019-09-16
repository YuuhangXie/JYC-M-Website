<template>
  <div class="discover">
    <topInfo></topInfo>

    <notice :noticeList="noticeList"></notice>

    <div class="gray" style="background-color: #f6f7f9; height: .1rem"></div>

    <navlist></navlist>

    <div class="gray" style="background-color: #f6f7f9; height: .1rem"></div>

    <act></act>

    <help></help>
  </div>
</template>

<script>
  import api from 'utils/api'

  import topInfo from 'components/discover/topInfo'
  import notice from 'components/discover/notice'
  import navlist from 'components/discover/discNav'
  import act from 'components/discover/act'
  import help from 'components/common/help'

  export default {
    beforeCreate() {
      document.title = '发现'
    },

    async created() {
      let newnotice = await api.get({url: '/api/discover/newnotice?type=0'})
      let adposition = await api.get({url: '/api/discover/adposition?position=10'})

      this.noticeList = newnotice.result
    },

    data() {
      return {
        noticeList: []
      }
    },

    components: {
      topInfo,
      notice,
      navlist,
      act,
      help
    }
  }
</script>