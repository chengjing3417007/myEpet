<template>
  <div>
    <div class="categoryBody"  v-if="categoryList.length">
      <div class="categoryBodyLeft">
        <ul class="lfetListNav"><!--:class="{on:index===flag}"-->
          <li :class="{onLi:index===flag}" v-for="(category, index) in categoryList" :key="index" @click="changeItem(index)">
            <a :class="{on:index===flag}" href="javascript:;">{{category.name}}</a>
          </li>
        </ul>
      </div>
      <div class="categoryBodyRight">
        <ul class="rightListNav"><!--双层遍历-->
          <li :key="index" v-for="(categoryBig,index) in categoryList[flag].cate_list">
            <!--标题-->
            <div class="title">{{categoryBig.title}}</div>
            <div class="contentImg"><!--ul-->
              <div class="item" :key="index" v-for="(categorySmall, index) in categoryBig.list">
                <img :class="categorySmall.photo ? 'isQita' : 'isPinpai'" :src="categorySmall.photo || categorySmall.logo" alt="">
                <span>{{categorySmall.name}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // targetItemList: []
      flag: 0
    }
  },
  mounted () {
    this.$store.dispatch('getCategoryList')
  },
  computed: {
    ...mapState(['categoryList'])
  },
  watch: {
    categoryList () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.categoryBodyLeft', {
          click: true
        })
        new BScroll('.categoryBodyRight', {
          click: true,
          scrollY: true
        })
      })
    }
  },
  methods: {
    changeItem (index) {
      // this.targetItemList = this.categoryList[index].cate_list
      this.flag = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
div
  .categoryBody
    //background #F3F4F5
    width 100%
    height 100%
    z-index -2
    .categoryBodyLeft
      position fixed
      top 40px
      left 0
      //width 70px
      width 18.7%
      height 86%
      border-right 5px solid #F3F4F5
      .lfetListNav
        width 92%
        // z-index -20
        li
          width 70px
          height 50px
          background: #fff;
          bottom-border-1px(#f3f4f5)
          line-height 50px
          text-align center
          a
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color #000000
        & .onLi
          background #f3f4f5
          a
            font-size: 13px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color #000000
          & .on
            color red
    .categoryBodyRight
      //width 100%
      width 81.3%
      margin-left 18.7%
      height 86%
      .rightListNav
        display flex
        flex-direction column
        width 100%
        flex-wrap wrap
        margin-top 40px
        li
          border-top 2px solid #F3F4F5
          display flex
          flex-direction column
          .title
            padding-top 10px
            margin-left 15px
            width 100%
            font-size 12px
            color #999
          .contentImg
            display flex
            flex-direction row
            flex-wrap wrap
            .item //相当于li
              width 33.3%
              height 117px
              display flex
              flex-direction column
              align-items center
              justify-content center
              img
                width 87px
                height 87px
              & .isQita
                width 87px
                height 87px
              & .isPinpai
                width 107px
                height 45px
              span
                font-size 13px
                color #333333
</style>
