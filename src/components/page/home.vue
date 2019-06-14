<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
<home-icon></home-icon>
</div>
</template>

<script>
import homeHeader from './home/header.vue'
import homeSwiper from './home/swiper.vue'
import homeIcon from './home/icon.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon
  }
}
</script>

<style>

</style>
