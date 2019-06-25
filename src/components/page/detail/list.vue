<template>
 <div class="list">
  <div 
    v-for="(item, index) of categoryList"
    :key="index"
    class="item border-bottom">
    <div class="text">
      <span class="item-title"><span class="item-img"></span>{{item.title}}</span>
    </div>
      <div v-if="item.children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
  </div>
</div>
 
</template>

<script>
export default {
  name: 'detailList',
  props: {
    categoryList: Array
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
    padding 0 .1rem
    color $textColor
    font-size: 0
    .item-title
      display: inline-block;
      vertical-align: top
      font-size: 14px
      .item-img
        display: inline-block;
        vertical-align: top
        width: .36rem;
        height: .36rem;
        margin-top: .27rem
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem; 
</style>
