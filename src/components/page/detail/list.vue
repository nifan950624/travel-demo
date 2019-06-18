<template>
 <div class="list">
  <div 
    v-for="(item, index) of titleList"
    :key="index"
    class="item border-bottom">
      <div class="title"></div>
      <span class="item-img"></span>
      <span class="item-title">{{item.title}}</span>
      <div v-if="item.children">
        <detail-list :titleList="item.children"></detail-list>
      </div>
  </div>
</div>
 
</template>

<script>
export default {
  name: 'detailList',
  props: {
    titleList: Array
  },
  data() {
    return {
      
    }
  },
}  
</script>

<style lang="stylus" scoped>
@import '~style/global.styl'
      .item
        line-height .9rem
        padding-left .2rem
        color $textColor
        .item-img
          position relative
          top .07rem
          left .1rem
          display: inline-block;
          width: .36rem;
          height: .36rem;
          background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
          margin-right: .1rem;
          background-size: .4rem 3rem; 
</style>
