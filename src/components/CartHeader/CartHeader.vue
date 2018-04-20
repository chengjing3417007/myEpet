<template>
  <div class="cartHeaderTitleWapper">
    <div class="cartHeaderTitle">
      <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      <span>{{titleMsg}}</span>
      <i class="iconfont icon-gengduo" @click="showAll"></i>
    </div>
    <transition name="fade">
      <div class="header-quick" v-if="showCartTab">
        <span class="cartTab"><i class="iconfont icon-home"></i>首页</span>
        <span class="cartTab"><i class="iconfont icon-page"></i>商品分类</span>
        <span class="cartTab"><i class="iconfont icon-gouwuchecar"></i>购物车</span>
        <span class="cartTab"><i class="iconfont icon-chongwu"></i>我的e宠</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    titleMsg: String
  },
  data () {
    return {
      showCartTab: false
    }
  },
  methods: {
    showAll () {
      this.showCartTab = !this.showCartTab
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartHeaderTitleWapper
  width 100%
  padding 10px 0
  .cartHeaderTitle
    height 50px
    width 100%
    margin 0 auto
    // background pink
    display flex
    justify-content space-between
    align-items center
    color #333
    border-bottom 1px solid #d7d7d7
    .icon-zuojiantou
      font-size 25px
    .icon-gengduo
      font-size 25px
    span
      color #333
  .fade-enter-active,.fade-leave-active/*显示过程、隐藏过程的过渡*/
    transition all 1s
  .fade-enter,.fade-leave-to/*隐藏时的样式*/
    height 0
  .header-quick
    width 100%
    background #fff
    overflow hidden
    padding 10px 0px
    display flex
    justify-content space-around
    .cartTab
      display flex
      flex-direction column
      align-items center
      color #7e8c8d
      .iconfont
        font-size 25px
</style>
