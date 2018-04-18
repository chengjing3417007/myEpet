<template>
    <ul class="footerguideUl">
      <li class="footerLi"  :class="{on:'/main'===$route.path}" @click="goto('/main')">
        <span class="item_icon">
          <i class="iconfont icon-wxbmingxingdianpu"></i>
        </span>
        <span>首页</span>
      </li>
      <li class="footerLi"  :class="{on:'/category/classify'===$route.path || '/category/brand'===$route.path}" @click="goto('/category')">
        <span class="item_icon">
          <i class="iconfont icon-iconfontcategory"></i>
        </span>
        <span>分类</span>
      </li>
      <li class="footerLi" :class="{on:'/cart'===$route.path}" @click="goto('/cart')">
        <span class="item_icon">
          <i class="iconfont icon-gouwuchecar"></i>
        </span>
        <span>购物车</span>
      </li>
      <li class="footerLi" :class="{on:'/login'===$route.path}" @click="goto('/login')">
        <span class="item_icon">
          <i class="iconfont icon-185085happysmileystreamline"></i>
        </span>
        <span>我的E宠</span>
      </li>
    </ul>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footerguideUl
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  width 100%
  height 55px
  background #ffffff
  .footerLi
    float left
    width 25%
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
