<template>
<div>
<home-header></home-header>
<home-swiper :swiperList="swiperList"></home-swiper>
<home-icon :iconList="iconList"></home-icon>
<home-recommend :recommendList="recommendList"></home-recommend>
<home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>

<script>
import axios from 'axios'
import homeHeader from './home/header.vue'
import homeSwiper from './home/swiper.vue'
import homeIcon from './home/icon.vue'
import homeRecommend from './home/recomends.vue'
import homeWeekend from './home/weekend.vue'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeWeekend
  },
  data() {
    return {
      city: '',
      iconList: [],
      recommendList:[],
      swiperList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeMessageInfo() {
      axios('/api/index.json').then((responce)=>{
        const data = responce.data.data;
        let arr = 'iconList recommendList swiperList weekendList'.split(' ')
        arr.map((item)=>{
          this[item] = data[item]
        })
      })
    }
  },
  mounted(){
    this.getHomeMessageInfo()
  }
}
</script>

<style>

</style>
