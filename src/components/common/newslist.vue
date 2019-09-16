<template>
  <div class="newslist">
    <div class="news-info">
      <div class="news-title">
        {{news.content}}
      </div>
      <div class="news-source">
        <span>{{news.source}}</span>
        <em>{{news.publishTime | publishTime}}</em>
      </div>
    </div>
    <div class="news-img">
      <img :src="news.iconUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['news'],
    filters: {
      publishTime(value) {
        let date = new Date(value)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .newslist
    padding-top .22rem
    padding-bottom .1rem
    display flex
    border-bottom 1px solid #f6f7f9
    justify-content space-between
    .news-info
      .news-title
        width 2.3rem
        font-size .14rem
        color #666
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      .news-source
        font-size .12rem
        color #999
        line-height 1em
        padding-top .19rem
        em
          padding-left .4rem
    .news-img
      padding-top .08rem
      img
        width .7rem
        height auto

</style>