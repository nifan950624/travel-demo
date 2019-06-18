<template>
  <div>
  <div class="banner" 
        @click="handleBannerClick">
        <div
        @click="handleBackClick"
        class="back-icon"><span class="iconfont back-icon-item">&#xe600;</span></div>
        <div class="banner-img">
          <img class="img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
        </div>
        <div class="banner-text">
          <div class= "banner-icon">
            <span class="iconfont icon-item">&#xe60d;</span><span class="number">8</span></div>
          <p class="title">故宫(AAAAA景区)</p>
        </div>
      </div>
      <gallery 
      :imgsList="imgs" 
      v-show="galleryShow"
      @back="close"
      ></gallery>
  </div>
</template>

<script>
import gallery from 'comment/gallery.vue'
export default {
  name: 'banner',
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg','http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'],
      galleryShow: false,
      judge: false
    }
  },
  methods: {
    handleBackClick(e) {
    this.judge = true
     this.$router.push('/')
    },
    handleBannerClick() {
      if (this.judge) {  
        return  this.judge = false
      }
      this.galleryShow = true
    },
    close() {
      this.galleryShow = false
    },
  },
  components: {
    gallery
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  .back-icon
    position absolute
    left .1rem
    top .1rem
    display flex
    justify-content center 
    align-items center
    height .6rem
    width .6rem
    border-radius 50%
    background rgba(0 0 0 0.5)
    color white
    .back-icon-item
      font-size .45rem 
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
    padding .2rem
    color white
    background linear-gradient(bottom rgba(0 0 0 0),rgba(0, 0, 0, 0.3))
    .title
      font-size .37rem
    .banner-icon
      width 1.2rem
      text-align center 
      line-height .35rem
      border-radius .32rem
      background rgba(0 0 0 0.5)
      padding-bottom .1rem
      .icon-item
        font-size .13rem
      .number
        font-size .24rem
        padding-left .08rem
        position relative
        top .06rem 
</style>