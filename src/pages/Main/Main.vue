<template>
  <div class="mainContainer">
    <div class="main_header">
      <div class="header_bind" v-if="shouBind">
        <img src="./images/01.jpg" alt="bind">
        <span @click="closeBind">
          <i class="iconfont icon-error"></i>
        </span>
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
          <li v-for="(menu,index) in mainInfo.menus" :key="index">
            <a href="javascript:;" class="on">{{menu.menu_name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="main_contentWapper">
      <div class="main_content">
        <!--轮播图-->
        <div class="swiper-container" v-if="mainCarousel.data">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel,index) in mainCarousel.data[1].value" :key="index">
              <img class="swiper-slideImg" :src="carousel.image" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
        <!--nav(一堆小图标)-->
        <div class="content_nav">
          <ul class="content_navUl" v-if="mainInfo.datas" >
            <li v-for="(data, index) in mainInfo.datas[1].menus" :key="index">
              <a href="javascript:;">
                <img :src="data.image" alt="">
              </a>
            </li>
          </ul>
        </div>
        <!--新人专享-->
        <div class="content_newUser">
          <img src="./images/newUser.gif" alt="">
        </div>
        <!--每日疯抢title-->
        <div class="main_surprise" v-if="mainCarousel.data">
          <div class="main_msg">
            <img :src="mainCarousel.data[3].surprise_icon.image" alt="">
            <span class="main_textSpan">
              下一场开始
                <span class="textInfo">{{mainCarousel.data[3].right_image.target.param.tid.substring(0,2)}}</span>:
                <span class="textInfo">{{mainCarousel.data[3].right_image.target.param.tid.substring(3,5)}}</span>
                <img :src="mainCarousel.data[3].right_image.image" alt="">
              </span>
          </div>
          <!--每日疯抢图片-->
          <div class="main_pic"  v-if="mainCarousel.data">
              <ul class="main_categoryUl">
                <li :key="index" v-for="(goodPic,index) in mainCarousel.data[3].goods">
                  <img :src="goodPic.image.image" alt="">
                  <span class="new">￥{{goodPic.sale_price}}</span>
                  <span class="discount">{{goodPic.little_price}}</span>
                </li>
              </ul>
          </div>
        </div>
        <div class="page-line"></div>
        <!--E宠国际/天哪 不好了/狗狗床垫-->
        <div class="content_pictures" v-if="mainInfo.datas">
          <div class="pictures_left">
            <img :src="mainInfo.datas[5].content_images[0][0].image" alt="">
          </div>
          <div class="pictures_right">
            <img :src="pic.image" :key="index" v-for="(pic, index) in mainInfo.datas[5].content_images[1]">
          </div>
        </div>
        <div class="page-line"></div>
        <div class="prePage" v-if="mainInfo.datas">
          <img :src="mainInfo.datas[7].value[0].image" alt="">
        </div>
        <div class="page-line"></div>
        <!--潮品视频-->
        <div class="advertise" v-if="mainInfo.datas">
          <MainMsgBoxNav :mainMsgNav="mainInfo.datas[9].value"/>
          <MainMsgbox :mainMsg="mainInfo.datas[10].value[0]"/>
        </div>
        <div class="page-line"></div>
        <div class="page-line"></div>
        <!--品牌特卖（很多图片）-->
        <div class="advertisePinpai" v-if="mainInfo.datas">
          <MainMsgBoxNav :mainMsgNav="mainInfo.datas[14].value"/>
          <AdvertiseDiscount :AdDisData="mainInfo.datas"/>
        </div>
        <!--萌爪联盟(带轮播)-->
        <div class="advertiseMengzhua" v-if="mainInfo.datas">
          <MainMsgBoxNav :mainMsgNav="mainInfo.datas[43].value"/>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="index" v-for="(item, index) in mainInfo.datas[44].value">
                <img class="swiper-slideImg" :src="item.image" alt="">
              </div>
            </div>
             <!--如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="page-line"></div>
        <!--萌宠说-->
        <div class="advertise" v-if="mainInfo.datas">
          <MainMsgBoxNav :mainMsgNav="mainInfo.datas[46].value"/>
          <MainMsgbox :mainMsg="mainInfo.datas[47].value[0]"/>
        </div>
        <div class="page-line"></div>
        <!--小剧场-->
        <div class="advertise" v-if="mainInfo.datas">
          <MainMsgBoxNav :mainMsgNav="mainInfo.datas[49].value"/>
          <MainMsgbox :mainMsg="mainInfo.datas[50].value[0]"/>
        </div>
        <div class="page-line"></div>
        <!--底部-->
        <div class="content_footerImg">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water">
        </div>
        <div class="content_footer">
          <span class="aboutUs">
            <span class="on">触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </span>
          <span  class="componyMsg">wap.epet.com版权：重庆易宠科技有限公司</span>
        </div>
        <div class="page-lineFooter"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
import AdvertiseDiscount from '../../components/AdvertiseDiscount/AdvertiseDiscount.vue'
import MainMsgbox from '../../components/MainMsgbox/MainMsgbox.vue'
import MainMsgBoxNav from '../../components/MainMsgBoxNav/MainMsgBoxNav.vue'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      shouBind: true
    }
  },
  mounted () {
    this.$store.dispatch('getMainInfo')
    this.$store.dispatch('getMainCarousel')
  },
  computed: {
    ...mapState(['mainInfo', 'mainCarousel'])
  },
  methods: {
    closeBind () {
      this.shouBind = false
    }
  },
  watch: {
    mainCarousel (value) {
      // 当轮播的数据发生变化时
      this.$nextTick(() => {
        // 自动轮播
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
        // 每日疯抢
        new BScroll('.main_pic', {
          click: true,
          scrollY: false,
          scrollX: true
        })
        // 滑动content
        new BScroll('.main_contentWapper', {
          click: true,
          scrollY: true
        })
        // 文字
        new BScroll('.header_category', {
          click: true,
          scrollY: false,
          scrollX: true
        })
      })
    },
    mainInfo (value) {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  components: {
    AdvertiseDiscount,
    MainMsgbox,
    MainMsgBoxNav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .mainContainer
    width 100%
    height 100%
    .main_header
      position fixed
      z-index 3
      width 100%
      // height 150px
      background #ffffff
      .header_bind
        width 100%
        height 55px
        position relative
        img
          width 100%
          height 100%
        span
          position absolute
          top 0
          left 5px
          i
            color white
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
        .header_categoryUl
          width 140%
          display flex
          flex-direction row
          li
            float left
            width 20%
            height 100%
            text-align: center;
            a
             text-decoration none
             line-height: 36px;
             font-size: 14px;
             color: #666;
          & :first-child
            & .on
              color #459d36
              bottom-border-1px(#459d36)
              padding-bottom 8px
    .main_contentWapper
      height 100%
      /*padding-bottom 55px*/
      .main_content
        width 100%
        padding-top 150px
        .swiper-container
          width 100%
          height 160px
          .swiper-wrapper
            .swiper-slide
              .swiper-slideImg
                width 100%
                height 100%
        .content_nav
          width 100%
          height 180px
          .content_navUl
            width 100%
            display flex
            flex-wrap wrap
            li
              width 20%
              height 90px
              flex-wrap: wrap;
              img
                width 100%
                height 100%
        .content_newUser
          width 100%
          height 120px
          img
            width 100%
            height 100%
        .main_surprise
          .main_msg
            margin 0 auto
            display flex
            flex-direction row
            justify-content space-between
            padding 5px 0
            width 100%
            height 40px
            img
              margin 10px 3px
              width 85px
              height 20px
            .main_textSpan
              font-size 13px
              display flex
              flex-direction row
              align-items center
              .textInfo
                vertical-align middle
                border 1px solid #666
              img
                vertical-align middle
                width 67px
                height 40px
          .main_pic
            .main_categoryUl
              display flex
              flex-direction row
              width 106%
              li
                float left
                width 100px
                height 130px
                display flex
                flex-direction column
                align-items center
                img
                  width 85px
                  height 85px
                .new
                  color: red;
                  font-size 14px
                .discount
                  font-size 12px
                  color #999
        .content_pictures
          width 100%
          height 250px
          display flex
          flex-direction row
          .pictures_left
            width 50%
            height 100%
            img
              width 100%
              height 100%
          .pictures_right
            display flex
            flex-direction column
            width 50%
            height 100%
            img
              height 50%
              width 100%
        .page-line
          page-line(10px)
        .prePage
          width 100%
          height 160px
          img
            height 100%
            width 100%
        .advertise // 潮品视频
          display flex
          flex-direction column
          align-items center
        .advertisePinpai // 品牌特卖（内有很多张图片）
          display flex
          flex-direction column
          align-items center
        .advertiseMengzhua // 萌爪联盟（内有轮播图）
          display flex
          flex-direction column
          align-items center
          .swiper-container
            width 100%
            height 160px
            .swiper-wrapper
              .swiper-slide
                .swiper-slideImg
                  width 100%
                  height 100%
        .advertise // 小剧场
          display flex
          flex-direction column
          align-items center
        .content_footerImg
          width 100%
          height 30px
          img
            width 100%
            height 100%
        .content_footer
          width 100%
          height 86px
          display flex
          flex-direction column
          align-items center
          justify-content center
          /*background palevioletred*/
          .aboutUs
            width 80%
            /*background yellow*/
            display flex
            flex-direction row
            margin-bottom 12px
            span
              color #333
              font-size 14px
              margin-right 18px
            & .on
              color red
          .componyMsg
            font-size 12px
        .page-lineFooter
          page-line(60px)

</style>
