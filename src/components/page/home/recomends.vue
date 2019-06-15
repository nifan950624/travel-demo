<template>
<div class="recomend">
    <div class="title"><span class="hot-img"><img class="hotList" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"></span>热销推荐</div>
    <ul class="recomend-list">
        <li class="item border-bottom" v-for="item of recomendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-text">
                <p class="item-title">{{item.title}}</p>
                <p class="item-summary">{{item.summary}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
export default {
    name: 'homeRecomend',
    data() {
        return {
            recomendList: [
                {id: '001', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg'
                },
                 {id: '002', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg'
                },
                 {id: '003', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg'
                },
                 {id: '004', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg'
                }        
            ]
        }
    }
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
                box-sizing: border-box
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
                color #ccc
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


