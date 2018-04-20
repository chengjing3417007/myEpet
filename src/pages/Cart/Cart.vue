<template>
  <div>
    <CartHeader titleMsg="购物车"/>
    <div class="cartWrapper">
        <div class="cart">
          <i class="iconfont icon-gouwuchecar"></i>
        </div>
        <div class="shoppingInfo">购物车是空的</div>
        <div class="goShopping">
          <a class="goStart">去逛逛</a>
          <a class="goCollection">我的收藏</a>
        </div>
      </div>
  </div>
</template>

<script>
import CartHeader from '../../components/CartHeader/CartHeader.vue'
export default {
  components: {
    CartHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartWrapper
  .cart
    height 170px
    width 100%
    text-align center
    line-height 170px
    .icon-gouwuchecar
      font-size 140px
      color #999
  .shoppingInfo
    width 100%
    height 20px
    text-align center
    font-size 20px
    color #999
  .goShopping
    width 100%
    height 60px
    display flex
    justify-content center
    .goStart
      margin-top 20px
      display inline-block
      border-radius 5px
      border 1px solid #999
      height 40px
      line-height 40px
      width 100px
      margin-right 20px
      text-align center
    .goCollection
      margin-top 20px
      display inline-block
      border-radius 5px
      border 1px solid #999
      height 40px
      line-height 40px
      width 100px
      text-align center
</style>
