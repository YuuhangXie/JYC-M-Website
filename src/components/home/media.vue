<template>
  <div class="media">
    <h3 class="h3-title">媒体报道 <span @click="handleClick">更多</span></h3>
    <newslist v-for="(news, index) in mediaList" :news="news" :key="index"></newslist>
  </div>
</template>

<script>
  import newslist from 'components/common/newslist'
  export default {
    props: ['mediaList'],
    components: {
      newslist
    },
    methods: {
      handleClick() {
        this.$router.push('/more')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .media
    padding .21rem .15rem
    color #666
    .h3-title
      display flex
      justify-content space-between
      color #333
      font-size .18rem
      line-height 1em
      span
        color #999
        font-size .14rem

</style>