<template>
<div class="recomend">
    <div class="title"><span class="hot-img"><img class="hotList" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"></span>热销推荐</div>
    <ul class="recomend-list">
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-text">
                <p class="item-title">{{item.title}}</p>
                <p class="item-summary">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
export default {
    name: 'homeRecomend',
    props: {
        recommendList : Array
    },
    methods:{
       
    },
}
</script>

<style scoped lang="stylus">
    @import '~style/fontdote.styl'
    @import '~style/global.styl'
    .title
        line-height .8rem
        text-indent .6rem 
        color $textColor
        font-size $fontSize
        position: relative 
        .hot-img
            box-sizing: border-box
            position: absolute
            left .2rem
            top 47%
            transform translateY(-50%) 
            display inline-flex
            height .3rem
            width .3rem
            align-items center
            justify-content center
            margin-right .1rem
            .hotList
                height 100%
    .recomend-list
        .item
            height 1.8rem
            display flex
            .item-img
                height 1.6rem
                width 1.6rem
                margin .1rem
        .item-text
            flex 1
            min-width 0
            padding .1rem
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
                color #666
                font-size $fontSize
            .item-button
                height .4rem
                line-height .4rem
                padding 0 .2rem
                color white
                background rgb(255 141 5)
                border-radius .06rem   
                margin-top .1rem
                font-size  $fontSize
</style>


