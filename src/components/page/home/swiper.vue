<template>
<div class="wraper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
    name: 'homeSwiper',
    props:{
        swiperList: Array
    },
    data() {
        return {
            swiperOption: {
            pagination: '.swiper-pagination',
            loop : true
            }
        }
    }
}
  

</script>

<style scoped lang="stylus">
    .wraper >>>.swiper-pagination-bullet-active
        background-color: white
    .wraper
        width: 100%
        height: 0
        overflow: hidden
        padding-bottom: 31.99%
        background: #eee 
        .swiper-img
            width: 100%
</style>

