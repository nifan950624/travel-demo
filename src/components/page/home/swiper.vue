<template>
<div class="wraper">
    <swiper :options="swiperOption">
    <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/667757f979fa38b12c4986f9930b6695.jpg_750x200_6cca7add.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/292b7afd8042e0fde68b5c09d4a22d27.jpg_750x200_42d7391a.jpg"></swiper-slide>
    <swiper-slide><img class="swiper-img" src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/fec63fd018410720a081d0a651831e55.jpg_750x200_8fc4c0d3.jpg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'homeSwiper',
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
        padding-bottom: 26.7%
        background: #eee 
        .swiper-img
            width: 100%
</style>

