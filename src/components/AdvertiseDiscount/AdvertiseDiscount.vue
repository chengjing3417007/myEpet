<template><!--很多图片的-->
  <div>
      <div class="advertiseImg" v-for="(item, index) in computedArr" :key="index">
        <div v-if="item.content_images">
          <img :src="item.content_images[0][0].image" alt="">
          <div class="line"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    AdDisData: Array
  },
  computed: {
    computedArr () {
      console.log(this.AdDisData.filter(item => (item.index > 20 && item.type_name === '通用广告模板' )))
      return this.AdDisData.filter(item => (item.index > 20 && item.type_name === '通用广告模板' ))
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.advertiseImg
  width 100%
  height 210px
  div
    width 100%
    height 100%
    img
      width 100%
      height 100%
    .line
      width 100%
      height 10px
      background #eee
</style>
