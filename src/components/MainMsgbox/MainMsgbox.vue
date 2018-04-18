<template><!--图片，文字一样的-->
  <div>
    <div class="advertiseImg">
      <img :src="mainMsg.cover.image" alt="">
    </div>
    <div class="text">
      <span class="s1">{{mainMsg.title}}</span>
      <span class="s2">
        <img :src="mainMsg.visit_img.image" alt="">
        {{mainMsg.visit}} | {{mainMsg.time}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mainMsg']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .advertiseImg
    width 100%
    height 210px
    background deeppink
    img
      width 100%
      height 100%
  .text
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    width 100%
    height 58px
    .s1
      color #333
      font-size 12px
    .s2
      color #999
      font-size 12px
      vertical-align middle
      img
        width 15px
        height 15px
        vertical-align middle
</style>
