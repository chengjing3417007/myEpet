<template>
  <div class="all_container">
    <div class="scrollWrapper">
      <CartHeader titleMsg="全部品牌"/>
      <div class="all_content">
        <div class="all_wrapper" ref="all_wrapperUl"><!--外层ul-->
          <div class="all_inner" :key="index" v-for="(brands,index) in allbrand"><!--外层li-->
            <h2 class="all_innerTitle">{{brands.order}}</h2>
            <div class="all_innerUl"><!--内层ul-->
              <div class="all_innderLi" :key="index" v-for="(brand, index) in brands.list">
                <div class="all_innderLiWrapper">
                  <div class="imgBorderbox">
                    <img class="all_innderLiImg" :src="brand.logo" alt="">
                  </div>
                  <div class="textContainer">
                    <span class="text1">{{brand.name}}</span>
                    <span class="text2">{{brand.address}}</span>
                  </div>
                </div>
              </div><!--内层li-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scrollWrapperRight">
      <ul class="scrollRightUl">
        <li class="scrollRightLi" v-for="(brands, i) in allbrand" :key="i">
          <span :class="{on:selectIndex===i}" class="liText" @click="saveIndex(i)">{{brands.order}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import CartHeader from '../../components/CartHeader/CartHeader.vue'
export default {
  data () {
    return {
      selectIndex: 0,
      scrollY: 0, // 当前Y轴的坐标
      tops: [] // 左侧列表的top的数组
    }
  },
  mounted () {
    this.$store.dispatch('getAllbrand', () => {
      this.$nextTick(() => {
        this._initScroll()
        this._initTops()
      })
    })
  },
  computed: {
    ...mapState(['allbrand']),
    // 计算当前的index,显示对应的内容
    currentIndex () {
      const {scrollY, tops} = this
      return tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < top[index + 1]
      })
    }
  },
  methods: {
    saveIndex (i) {
      this.selectIndex = i
      this.scrollY = this.tops[i] // 立即更新当前下标（即左侧选中的的样式）
      this.leftScroll.scrollTo(0, -this.tops[i], 300)
    },
    _initTops () {
      /* eslint-disable no-new */
      const tops = []
      let top = 0
      tops.push(top)
      const lis = this.$refs.all_wrapperUl.getElementsByClassName('all_inner')
      Array.prototype.slice.call(lis).forEach((li, index) => {
        top += li.clientHeight
        tops.push(top)
      })
      this.tops = tops
    },
    _initScroll () {
      // 左侧分类滑动
      this.leftScroll = new BScroll('.all_container', {
        probeType: 2,
        click: true
      })
      this.leftScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
      })
      this.leftScroll.on('scrollEnd', (pos) => { // 监视滑动
        this.scrollY = Math.abs(pos.y)
        const index = this.tops.findIndex((top, index) => {
          return this.scrollY >= top && this.scrollY < top[index + 1]
        })
        console.log(index)
      })
    }
  },
  components: {
    CartHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.all_container
  height 100%
  .scrollWrapper
    .all_content
      .all_wrapper
        .all_inner
          .all_innerTitle // title
            width 100%
            height 24px
            text-indent 15px
            line-height 24px
            color #999
            font-size 12px
            font-weight 400
          .all_innerUl
            width 100%
            .all_innderLi
              width 100%
              height 73px
              border-bottom 1px solid #f3f4f5
              margin-right 20px
              .all_innderLiWrapper
                padding 10px
                width 85%
                height 100%
                display flex
                flex-direction row
                .imgBorderbox
                  width 100.5px
                  height 52px
                  margin-right 10px
                  border 1px solid #f3f4f5
                  .all_innderLiImg
                    height 100%
                    width 100%

                .textContainer
                  height 100%
                  display flex
                  flex-direction column
                  .text1
                    margin-top 15px
                    font-size 14px
                    color #333
                  .text2
                    font-size 12px
                    margin-top 5px
                    color #999

  .scrollWrapperRight
    height 100%
    position fixed
    top 0
    right 0
    .scrollRightUl
      margin-top 91px
      .scrollRightLi
        height 18px
        .liText
          font-size 16px
          color #666
          font-weight 300
        & .on
          color red
</style>
