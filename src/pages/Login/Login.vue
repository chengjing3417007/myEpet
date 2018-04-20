<template>
  <div>
    <div class="loginTop">
      <div class="loginTop_top">
        <span>
          <i class="iconfont icon-zuojiantou"></i>
        </span>
        <span>注册</span>
      </div>
      <div class="loginTop_bottom">
        <span class="putongLogin" @click="howLogin=true">普通登录
          <div class="sanjiao1" v-show="howLogin"></div>
        </span>
        <span class="mimaLogin" @click="howLogin=false">手机动态密码登录
          <div class="sanjiao2" v-show="!howLogin"></div>
        </span>
      </div>
    </div>
    <div class="loginBody" v-if="howLogin">
      <div class="mformBox"></div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      howLogin: true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginTop
    background-image url("./imags/ef42dfb164982f302e78ca327b9d306c.png")
    background-size 100%
    width 100%
    height 180px
    display flex
    flex-direction column
    justify-content space-between
    .loginTop_top
      height 50px
      padding 0 5px 0 5px
      line-height 50px
      color #ffffff
      display flex
      flex-direction row
      justify-content space-between
    .loginTop_bottom
      height 44px
      display flex
      flex-direction row
      justify-content space-between
      background #ffffff
      .putongLogin
        position relative
        display inline-block
        width 50%
        height 100%
        color white
        line-height 44px
        text-align center
        .sanjiao1
          position absolute
          bottom -1px
          right 75px
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
      .mimaLogin
        position relative
        width 50%
        height 100%
        display inline-block
        color white
        line-height 44px
        text-align center
        .sanjiao2
          position absolute
          bottom -1px
          right 75px
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
  .loginBody
    width 100%
    //background #fff
    background orange
    padding 0 10px 0 10px
</style>
