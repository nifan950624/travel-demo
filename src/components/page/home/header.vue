<template>
<header class="homeheader">
    <div class="header-left">返回</div>
    <div class="inputSeach">输入城市/经典/游玩主题</div>
    <div class="header-right">城市</div>
</header>
</template>

<script>
export default {
  name: 'homeHeader'
}
</script>

<style scoped lang="stylus">
    .homeheader
        display: flex
        height: 0.9rem
        line-height: 0.9rem
        align-items: center
        color: #fff
        background: rgb(0,152,183)
        padding:0 0.2rem
        .header-left
            float: left
        .inputSeach
            flex-grow: 1
            color: #ddd
            line-height 0.6rem
            background-color: #fff
            margin: 0.2rem 0
            border-radius: 3px
            margin-left: 0.2rem
            margin-right: 0.2rem 
        .header-right
            float: right
            padding:0 0.2rem  
</style>
