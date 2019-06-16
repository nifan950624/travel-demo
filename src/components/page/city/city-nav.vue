<template>
  <div class="nav">
    <ul class="navList">
      <li class="alphabet" v-for="(item, key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  nmae: 'cityNav',
  props:{
    cities: Object
  }
}
</script>

<style scoped lang="stylus">
@import '~style/global.styl';
  .nav
    position absolute
    top 1.6rem
    bottom 0
    right 0
    display flex
    flex-direction column
    justify-content center
    .navList
      text-align center
      color $bgColor
      .alphabet
        padding .1rem
</style>

