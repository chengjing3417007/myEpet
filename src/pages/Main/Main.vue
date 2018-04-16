<template>
  <div class="mainContainer">
    <div class="main_header">
      <div class="header_bind">
        <img src="./images/01.jpg" alt="bind">
      </div>
      <div class="header_search">
        <span>狗狗</span>
        <span>|</span>
        <span>重庆</span>
        <span class="item_icon">
          <i class="iconfont icon-sanjiao"></i>
        </span>
        <div class="search">
          <input type="text" placeholder="搜索商品和品牌">
          <span class="item_icon_search">
            <i class="iconfont icon-search"></i>
          </span>
        </div>
        <img src="./images/msg.png" alt="">
      </div>
      <div class="header_category">
        <ul class="header_categoryUl">
          <li><a href="javascript:;" class="on">首页</a></li>
          <li><a href="javascript:;">狗狗主粮</a></li>
          <li><a href="javascript:;">零食</a></li>
          <li><a href="javascript:;">医疗保健</a></li>
          <li><a href="javascript:;">玩具</a></li>
          <li><a href="javascript:;">外出</a></li>
          <li><a href="javascript:;">服饰城</a></li>
        </ul>
      </div>
    </div>
    <div class="main_content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/lunbo2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbo.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./images/lunbo2.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="content_nav"></div>
      <div class="content_newUser"></div>
      <div class="content_content"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
export default {
  mounted () {
    this.$nextTick(() => {
      // 滑动
      new BScroll('.header_category', {
        click: true,
        scrollY: false,
        scrollX: true
      })
    // 自动轮播
      new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .mainContainer
    position relative
    width 100%
    height 100%
    background pink
    .main_header
      position fixed
      width 100%
      /*height 150px*/
      .header_bind
        width 100%
        height 55px
        img
          width 100%
          height 100%
      .header_search
        box-sizing border-box
        padding 5px 0 5px 10px
        width 100%
        height 51px
        text-align center
        line-height 41px
        span
          font-size 14px
          color #898989
        .search
          position relative
          width 60%
          display inline-block
          input
            width 100%
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
          i
            position absolute
            top 0
            right 0

        img
          width 25px
          height 25px
          vertical-align middle
      .header_category
        width 100%
        height 36px
        background red
        .header_categoryUl
          width 140%
          display flex
          flex-direction row
          li
            float left
            width 20%
            height 100%
            background bisque
            text-align: center;
            a
             text-decoration none
             line-height: 36px;
             font-size: 14px;
             color: #666;
            & .on
              color green
              padding-bottom 8px
              bottom-border-1px(green)
    .main_content
      position absolute
      left 0
      bottom 0
      right 0
      top 150px
      .swiper-container
        width 100%
        height 160px

</style>
