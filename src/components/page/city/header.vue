<template>
    <div class="city-header">
        <router-link to="/"><div class="iconfont back-home">&#xe600;</div></router-link>
    城市选择
    </div>
</template>

<script>
export default {
    name: 'cityHeader'
}
</script>

<style scoped lang="stylus">
    @import '~style/global.styl'
   .city-header
       line-height $headerHeight
       background $bgColor
       text-align center
       position relative
       color white
       .back-home
           position absolute
           left 0
           top 0
           font-size: .5rem
           color white
           margin-left .1rem 
</style>

