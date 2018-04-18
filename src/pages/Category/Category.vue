<template>
  <div>
    <div class="categoryHeader">
      <div class="tab">
          <div class="textWrapper">
            <span>
              <router-link to="/category/classify">分类</router-link>
            </span>
            <span>
              <router-link to="/category/brand">品牌</router-link>
            </span>
          </div>
          <div class="search">
            <a href="javascript:;">
              <i class="iconfont icon-search"></i>
            </a>
          </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
div
  height 100%
  .categoryHeader
    width 100%
    height 40px
    padding 0 15px
    background white
    position fixed
    top 0
    left 0
    z-index 10
    border-bottom 1px solid #cbcbcb
    .tab
      width 100%
      height 100%
      display flex
      flex-direction row
      box-sizing border-box
      .textWrapper
        width 85%
        height 100%
        display flex
        justify-content center
        span
          margin-right 5px
          a
            font-size 13px
            font-weight 700
            line-height 40px
            color #000
      .search
        width 15%
        height 100%
        text-align center
</style>
