<template>
  <div class="gallery" @click="hanleGalleryClick">
    <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide 
      v-for="(item, index) of imgsList" 
      :key="index">
          <img class="img" :src="item"> 
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: {
    imgsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      imgs: [],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    hanleGalleryClick() {
      this.$emit('back')
    }
  }
}
</script>

<style scoped lang="stylus">
  .swiper-container
    overflow inherit 
  .gallery
    position fixed
    top 0 
    bottom 0
    left 0
    right 0
    z-index 99
    background #000
    display flex
    flex-direction column
    justify-content  center
    .wrapper
      height 0
      width 100%
      padding-bottom 67%
      .img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem    
</style>

