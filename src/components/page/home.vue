<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>
<home-recomend></home-recomend>
</div>
</template>

<script>
import homeHeader from './home/header.vue'
import homeSwiper from './home/swiper.vue'
import homeIcon from './home/icon.vue'
import homeRecomend from './home/recomends.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecomend
  }
}
</script>

<style>

</style>
