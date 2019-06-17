<template>
<header class="homeheader">
    <div class="header-left"><div class="iconfont back-icon">&#xe600;</div></div>
    <div class="inputSeach"><span class="iconfont seach">&#xe601;</span>输入城市/经典/游玩主题</div>
    <router-link to="/city"><div class="header-right">{{this.$store.state.city}}<span class="iconfont">&#xe602;</span></div></router-link>
</header>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style scoped lang="stylus">
@import '~style/global.styl'
    .homeheader
        display: flex
        height: $headerHeight
        line-height: $headerHeight
        align-items: center
        color: #fff
        background: $bgColor
        padding: 0 .1rem
        .header-left
            float: left
            .back-icon
                font-size: .5rem
        .inputSeach
            box-size: border-box 
            flex-grow: 1
            color: #ddd
            line-height 0.6rem
            background-color: #fff
            margin: 0.2rem 0
            border-radius: .06rem
            margin-left: .1rem
            .seach
                padding 0 .1rem 0 .2rem 
        .header-right
            float: right
            text-align: center
            padding-left: .2rem
            color white
</style>
