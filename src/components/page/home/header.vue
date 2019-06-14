<template>
<header class="homeheader">
    <div class="header-left"><div class="iconfont back-icon">&#xe600;</div></div>
    <div class="inputSeach"><span class="iconfont seach">&#xe601;</span>输入城市/经典/游玩主题</div>
    <div class="header-right">城市<span class="iconfont">&#xe602;</span></div>
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
        height: 0.9rem
        line-height: 0.9rem
        align-items: center
        color: #fff
        background: $bgColor
        padding: 0 .1rem
        .header-left
            float: left
            .back-icon
                font-size: .5rem
        .inputSeach
            flex-grow: 1
            color: #ddd
            line-height 0.6rem
            background-color: #fff
            margin: 0.2rem 0
            border-radius: 4px
            margin-left: .1rem
            .seach
                padding 0 .1rem
        .header-right
            float: right
            text-align: center
            padding-left: .2rem
</style>
