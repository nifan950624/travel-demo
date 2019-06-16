<template>
<div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul class="weekend-list">
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
            <div class="item-img-wraper"><img class="item-img" :src="item.imgUrl"></div>
            <div class="item-text">
                <p class="item-title">{{item.title}}</p>
                <p class="item-summary">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
export default {
    name: 'homeWeekend',
    props: {
        weekendList: Array
    },
}
</script>

<style scoped lang="stylus">
    @import '~style/fontdote.styl'
    @import '~style/global.styl'
    .title
        line-height .8rem
        padding-left .2rem 
        background #ddd
        color $textColor
        font-size $fontSize 
    .weekend-list
            .item-img-wraper
                height 0
                padding-bottom 36.9%
                background grey    
                .item-img
                    width 100%
            .item-text
                padding .2rem .2rem .1rem .2rem
                .item-title
                    height .4rem
                    line-height .4rem
                    color #000
                    font-size $fontSize
                    ellipsis()
                .item-summary
                    ellipsis()
                    height .6rem
                    line-height .6rem
                    color rgb(97, 97, 97)
</style>
