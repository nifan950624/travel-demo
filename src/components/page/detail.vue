<template>
    <div>
      <banner></banner>
      <detail-header></detail-header>
    </div>
</template>

<script>
import banner from './detail/banner.vue'
import detailHeader from './detail/header.vue'
export default {
  name: 'detailpage',
  components: {
      banner,
      detailHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>


