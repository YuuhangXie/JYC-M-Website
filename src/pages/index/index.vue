<template>
  <div class="index-wrap">
    <main>
      <!--路由视图渲染-->
      <router-view></router-view>
    </main>
    <footer>
      <ul>
        <router-link active-class="active" tag="li" to="/index/home">
          <svg id="icon-xuanzhong" viewBox="0 0 1024 1024"><path d="M672.1 124h129v320.2h-129z" fill="#FE6729"></path><path d="M98 507.8l94 4.3-0.7 380.2h223.8V635H609v257.3h223.9l1.2-380.7 93.9 0.5L512.5 93.6l-0.4-0.4" fill="#333333"></path></svg>
          <svg id="icon-weixuanzhong" viewBox="0 0 1024 1024"><path d="M512.2 192.6l252.1 253.9-0.2 64.8-1 311H647V565H377.1v257.3H261.5l0.6-310.1 0.1-66.6 250-253m-0.1-99.4L98 512.1h94l-0.7 380.2h255.8V635H577v257.3h255.8l1.2-380.7 93.9 0.5L512.5 93.6l-0.4-0.4z" fill="#333333"></path></svg>
          <span>首页</span>
        </router-link>
        <router-link active-class="active" tag="li" to="/index/product">
          <svg id="icon-xuanzhong" viewBox="0 0 1024 1024"><path d="M128 191.8h769.1v639.9H128z" fill="#333333"></path><path d="M576.6 658.2L441.4 527 275.5 638.1l-38.9-58.2 212.9-142.5 126.1 122.3 165.8-167.1 49.7 49.3z" fill="#FE6729"></path></svg>
          <svg id="icon-weixuanzhong" viewBox="0 0 1024 1024"><path d="M827.1 261.8v499.9H198V261.8h629.1m70-70H128v639.9h769.1V191.8z" fill="#333333"></path><path d="M576.6 658.2L441.4 527 275.5 638.1l-38.9-58.2 212.9-142.5 126.1 122.3 165.8-167.1 49.7 49.3z" fill="#333333"></path></svg>
          <span>投资</span>
        </router-link>
        <router-link active-class="active" tag="li" to="/index/discover">
          <svg id="icon-xuanzhong" viewBox="0 0 1024 1024"><path d="M510.4 957.3c-60 0-118.2-11.8-173-34.9-52.9-22.4-100.5-54.4-141.3-95.3s-72.9-88.4-95.3-141.3c-23.2-54.8-34.9-113-34.9-173s11.8-118.2 34.9-173c22.4-52.9 54.4-100.5 95.3-141.3s88.4-72.9 141.3-95.3c54.8-23.2 113-34.9 173-34.9s118.2 11.8 173 34.9c52.9 22.4 100.5 54.4 141.3 95.3s72.9 88.4 95.3 141.3c23.2 54.8 34.9 113 34.9 173S943.2 631 920 685.8c-22.4 52.9-54.4 100.5-95.3 141.3s-88.4 72.9-141.3 95.3c-54.8 23.2-113 34.9-173 34.9z" fill="#333333"></path><path d="M510.4 68.8c59.9 0 118.1 11.7 172.8 34.9 52.9 22.4 100.4 54.4 141.1 95.2 40.8 40.8 72.8 88.3 95.2 141.1 23.2 54.7 34.9 112.9 34.9 172.8s-11.7 118.1-34.9 172.8c-22.4 52.9-54.4 100.4-95.2 141.1-40.8 40.8-88.3 72.8-141.1 95.2-54.7 23.2-112.9 34.9-172.8 34.9s-118.1-11.7-172.8-34.9c-52.9-22.4-100.4-54.4-141.1-95.2-40.8-40.8-72.8-88.3-95.2-141.1-23.2-54.7-34.9-112.9-34.9-172.8S78.1 394.7 101.3 340c22.4-52.9 54.4-100.4 95.2-141.1 40.8-40.8 88.3-72.8 141.1-95.2 54.7-23.1 112.9-34.9 172.8-34.9m0-1c-245.8 0-445 199.2-445 445s199.2 445 445 445 445-199.2 445-445-199.2-445-445-445z" fill="#333333"></path><path d="M391.9 420.6L664 308.9l-29.8 292.7-271.7 111.1z" fill="#FE6729"></path><path d="M623.3 363.5l-21.8 213.6-198.3 81.1L424.7 445l198.6-81.5m81.5-109.1L359.2 396.2l-37.3 370.9 345-141.1 37.9-371.6z" fill="#FE6729"></path><path d="M514.2 511.2m-45 0a45 45 0 1 0 90 0 45 45 0 1 0-90 0Z" fill="#333333"></path></svg>
          <svg id="icon-weixuanzhong" viewBox="0 0 1024 1024"><path d="M510.4 137.8c50.7 0 99.8 9.9 145.9 29.4 44.6 18.9 84.8 45.9 119.2 80.4 34.5 34.5 61.5 74.6 80.4 119.2 19.5 46.2 29.4 95.3 29.4 145.9s-9.9 99.8-29.4 145.9c-18.9 44.6-45.9 84.8-80.4 119.2-34.5 34.5-74.6 61.5-119.2 80.4-46.2 19.5-95.3 29.4-145.9 29.4s-99.8-9.9-145.9-29.4c-44.6-18.9-84.8-45.9-119.2-80.4-34.5-34.5-61.5-74.6-80.4-119.2-19.5-46.2-29.4-95.3-29.4-145.9s9.9-99.8 29.4-145.9c18.9-44.6 45.9-84.8 80.4-119.2s74.6-61.5 119.2-80.4c46.1-19.5 95.3-29.4 145.9-29.4m0-70c-245.8 0-445 199.2-445 445s199.2 445 445 445 445-199.2 445-445-199.2-445-445-445z" fill="#333333"></path><path d="M623.3 363.5l-21.8 213.6-198.3 81.1L424.7 445l198.6-81.5m81.5-109.1L359.2 396.2l-37.3 370.9 345-141.1 37.9-371.6z" fill="#333333"></path><path d="M514.2 511.2m-45 0a45 45 0 1 0 90 0 45 45 0 1 0-90 0Z" fill="#333333"></path></svg>
          <span>发现</span>
        </router-link>
        <router-link active-class="active" tag="li" to="/index/profile">
          <svg id="icon-xuanzhong" viewBox="0 0 1024 1024"><path d="M403.1 574.2l217.5 0.1L895.9 728v200.2H127.8V728z" fill="#333333"></path><path d="M281.9 351.1a230 253 0 1 0 460 0 230 253 0 1 0-460 0Z" fill="#333333"></path><path d="M565.3 657H461.7l-33.3-80h167zM455.1 767.8h115.4v160.4H455.1z" fill="#FE6729"></path></svg>
          <svg id="icon-weixuanzhong" viewBox="0 0 1024 1024"><path d="M421.3 644.2l181.1 0.1 223.5 124.8v89.2H197.8V769l223.5-124.8m-18.2-70L127.8 728v200.3h768.1V728L620.6 574.3l-217.5-0.1z" fill="#333333"></path><path d="M511.9 168.2c88.2 0 160 82.1 160 183s-71.8 183-160 183-160-82.1-160-183 71.7-183 160-183m0-70c-127 0-230 113.3-230 253s103 253 230 253 230-113.3 230-253-103-253-230-253z" fill="#333333"></path></svg>
          <span>我的</span>
        </router-link>
      </ul>

    </footer>

  </div>

</template>

<style lang="stylus" scoped>
  @import "~assets/styles/border.styl"
  .index-wrap
    height 100%
    display flex
    flex-direction column
    main
      flex 1
      background-color #fff
    footer
      height 0.46rem
      padding-top 0.06rem
      background-color #fff
      // 一像素边框
      border1px(1px 0 0 0, #ebedf0)
      ul
        height 100%
        display flex
        li
          flex 1
          display flex
          flex-direction column
          justify-content center
          align-items center
          svg
            width .22rem
            height .22rem
          span
            color #666
            font-size .12rem
          &.active
            svg#icon-xuanzhong
              display block
            svg#icon-weixuanzhong
              display none
          svg#icon-xuanzhong
            display none
          svg#icon-weixuanzhong
            display block

</style>