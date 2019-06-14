<template>
<div>
<home-header></home-header>
<home-swiper></home-swiper>
</div>
</template>

<script>
import homeHeader from './home/header.vue'
import homeSwiper from './home/swiper.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style>

</style>
