<template>
<div>
  <router-link to="/">
    <div
      v-if="listenScroll===false"
      class="back-icon"
      >
      <span class="iconfont back-icon-item">&#xe600;</span>
    </div>
  </router-link>
  <div class="header">
    <div 
    class="detail-header"
    :style="changeStyle"
    v-show="listenScroll"
    >
      <router-link to="/"><div class="iconfont detail-back-home">&#xe600;</div></router-link>
      景点详情
    </div>
  </div>
</div>

  
</template>

<script>
export default {
  name: 'detailTitle',
  data() {
    return {
      listenScroll: false,
      changeStyle: {
        opacity: 0,
      }
    }
  },
  methods: {
    handleScroll() {
      console.log(1)
      let top = window.scrollY
      if (top > 0) {
        this.listenScroll = true
        let opacity = top/140
        if (opacity > 1) {
          opacity = 1
        }
        this.changeStyle = {
          opacity
        }
      }else{
        this.listenScroll = false
      }
    }
  },
  created() {
    this.$nextTick(() => {
      window.addEventListener('scroll',this.handleScroll)
    })   
  },
  destroyed() {
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/global.styl'
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
  .header
    position fixed
    top 0
    left 0
    right 0
    left 0
    z-index 2
    .detail-header
      line-height $headerHeight
      background $bgColor
      text-align center
      position relative
      color white
      .detail-back-home
        position absolute
        left 0
        top 0
        font-size: .5rem
        color white
        margin-left .1rem 
  .ceshi
    padding-bottom  50rem     
</style>
