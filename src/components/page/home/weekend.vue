<template>
<div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul class="weekend-list">
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
            <div class="item-img-wraper"><img class="item-img" :src="item.imgUrl"></div>
            <div class="item-text">
                <p class="item-title">{{item.title}}</p>
                <p class="item-summary">{{item.summary}}</p>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
export default {
    name: 'homeWeekend',
    data() {
        return {
            weekendList: [
                {id: '001', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg'
                }, 
                {id: '002', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg'
                }, 
                {id: '003', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg'
                }, 
                {id: '004', 
                title: '武汉海昌极地海洋公园',
                summary: '企鹅是南极的土著居民，人们把它称为南极的象征。企鹅的跳水本领可与世界跳水冠军相媲美，它们能跳出水面2米多高，可以说企鹅是当之无愧的游泳健将。', 
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg'
                },     
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
