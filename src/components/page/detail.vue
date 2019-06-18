<template>
    <div>
      <banner
      :bannerImg="bannerImg"
      :sightName='sightName'
      :gallaryImgs='gallaryImgs'
      ></banner>
      <detail-header></detail-header>
      <detail-list :categoryList="categoryList"></detail-list>
      <div class="holder"></div> 
    </div>
</template>

<script>
import axios from 'axios'
import banner from './detail/banner.vue'
import detailHeader from './detail/header.vue'
import detailList from './detail/list.vue'
export default {
  name: 'detailPage',
  components: {
      banner,
      detailHeader,
      detailList,
  },
  data() {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }  
  },
  methods: {
    getDetailMessage() {
      axios.get('api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then((responce) => {
        let data = responce.data.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName 
      })
    }
  },
  mounted() {
    this.getDetailMessage()
  }
}
</script>

<style lang="stylus" scoped>
  .holder
    padding-bottom 50rem
</style>


