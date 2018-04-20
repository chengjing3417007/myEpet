<template>
  <div class="wrapper">
    <ul class="brangUl">
      <li v-for="(brand, index) in brandList" :key="index">
        <div class="brandContent">
          <div class="title">{{brand.title}}</div>
          <!--图片的ul-->
          <div class="brandImgs">
            <!--图片的li-->
            <div class="imgLi" :key="index" v-for="(i, index) in brand.list">
              <div class="imgBorder">
                <img :src="i.logo" alt="">
              </div>
              <span class="s1">{{i.name}}</span>
              <span class="s2">{{i.address}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="all" @click="goto('/all')">全部</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('getBrandList')
  },
  computed: {
    ...mapState(['brandList'])
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  },
  watch: {
    brandList (value) {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.wrapper', {
          click: true,
          scrollY: true
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  height 100%
  padding-bottom -60px
  .brangUl
    li
      width 100%
      .brandContent
        padding-top 42px
        display flex
        flex-direction column
        .title
          width 100%
          height 40px
          text-align center
          line-height 40px
        .brandImgs
          display flex
          flex-direction row
          flex-wrap wrap
          //justify-content space-around
          .imgLi
            //width 122px
            width 33.3333%
            height 107px
            display flex
            align-items center
            flex-direction column
            justify-content center
            box-sizing border-box
            .imgBorder
              width 112px
              height 62px
              border 1px solid #e9e9e9
              img
                width 100%
                height 80%
            .s1
              width 80%
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 13px
              color #333333
              margin 4px 0px
              text-align center
            .s2
              font-size 12px
              color #999
  .all
    position fixed
    right 10px
    bottom 65px
    width 40px
    height 40px
    border-radius 50%
    text-align center
    line-height 40px
    font-size 12px
    color #fff
    background #666
</style>
