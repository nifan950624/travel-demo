<template>
    <div class="city-seach">
        <input class="input-city" type="text" placeholder="输入城市或拼音">
    </div>
</template>

<script>
export default {
    name: 'seachCity'        
}
</script>

<style lang="stylus" scoped>
    @import '~style/global'
    .city-seach
        display flex
        align-items center
        justify-content center
        background $bgColor
        padding 0 .1rem .1rem .1rem
        .input-city
            width 100%
            height .6rem
            line-height .6rem
            padding  0 .2rem
            text-align center
            color #ccc
            border-radius .06rem 

</style>

