<template>
  <div>
    <div class="title">
      <img class="pic1" :src="mainMsgNav.left.img.image" alt="">
      <img class="pic2" :src="mainMsgNav.right.img.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['mainMsgNav']
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  div
    width 100%
  .title
    margin 0 aotu
    width 95%
    height 74px
    display flex
    flex-direction row
    justify-content space-between
    img
      height 100%
</style>
