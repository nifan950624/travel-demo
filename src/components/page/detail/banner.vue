<template>
  <div>
    <div class="banner" 
      @click="handleBannerClick">
      <div class="banner-img">
        <img class="img" :src="bannerImg">
      </div>
      <div class="banner-text">
        <div class= "banner-icon">
          <span class="iconfont icon-item">&#xe60d;</span><span class="number">{{gallaryImgs.length}}</span></div>
          <div class="placeholder">
            <p class="title">{{sightName}}</p>
          </div>
      </div>
    </div>
    <fade-animation> 
      <gallery 
      :imgsList="gallaryImgs" 
      v-show="galleryShow"
      @back="close">
      </gallery>
    </fade-animation>
  </div>
</template>

<script>
import gallery from 'comment/gallery.vue'
import fadeAnimation from 'comment/fadeAnimation.vue'
export default {
  name: 'banner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data() {
    return {
      galleryShow: false
    }
  },
  methods: {
    handleBannerClick() {
      this.galleryShow = true
    },
    close() {
      this.galleryShow = false
    },
  },
  components: {
    gallery,
    fadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    .banner-img
      overflow hidden
      height 0
      padding-bottom 55%
      .img
        width 100%
    .banner-text
      position absolute
      left 0
      bottom 0
      right 0
      line-height .5rem
      color white
      .placeholder
        height 0
        padding-bottom .7rem
        overflow hidden
        .title
          font-size .35rem
          padding 0 .1rem .2rem .1rem
          background linear-gradient(to top,rgba( 0 0 0 0.5), rgba( 0 0 0 0));
      .banner-icon
        width 1.2rem
        text-align center 
        line-height .35rem
        border-radius .32rem
        background rgba(0 0 0 0.5)
        padding-bottom .1rem
        margin-bottom .05rem
        .icon-item
          font-size .13rem
        .number
          font-size .24rem
          padding-left .08rem
          position relative
          top .06rem 
</style>