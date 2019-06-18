<template>
    <div>
      <banner></banner>
      <detail-header></detail-header>
      <detail-list :titleList="list"></detail-list> 
    </div>
</template>

<script>
import banner from './detail/banner.vue'
import detailHeader from './detail/header.vue'
import detailList from './detail/list.vue'
export default {
  name: 'detailpage',
  components: {
      banner,
      detailHeader,
      detailList
  },
  data() {
    return {
      list: [
        {title:'故宫当日票',
          children:[
            {title: '故宫成人票'},
            {title: '故宫学生票'}
          ]},
        {title:'故宫预售成人票'},
        {title:'故宫预售老人票'}
      ]
    }  
  }
}
</script>

<style lang="stylus" scoped>

</style>


