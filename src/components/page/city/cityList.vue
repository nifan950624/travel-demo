<template>
        <div class="list">
            <div class="city-title border-topbottom">当前城市</div>
            <div class="button-item">
                <div class="items">
                    <div class="button" >北京</div>
                </div>
            </div>
            <div class="city-title border-topbottom">热门城市</div>
            <div class="button-item">
                <div class="items">
                    <div class="button" >北京</div>
                </div>
                <div class="items">
                    <div class="button" >北京</div>
                </div>
                <div class="items">
                    <div class="button" >北京</div>
                </div>
                <div class="items">
                    <div class="button" >北京</div>
                </div>
                <div class="items">
                    <div class="button" >北京</div>
                </div>
            </div>
            <div class="city-item">
                <div class="city-title border-topbottom">A</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div> 
            </div>
            <div class="city-item">
                <div class="city-title border-topbottom">A</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div> 
            </div>
            <div class="city-item">
                <div class="city-title border-topbottom">A</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div>
                <div class= "cityItemName border-bottom">阿拉尔</div> 
            </div>     
        </div>           
</template>

<script>
export default {
    name: 'cityList'
}
</script>

<style lang="stylus" scoped>
    @import '~style/global.styl'
    .border-topbottom
        &:after
          border-color rgb(206 206 206) 
        &:before
          border-color rgb(206 206 206)
    .border-bottom
        &:after
          border-color rgb(206 206 206) 
    .list
        position absolute
        top 1.6rem
        right 0
        left 0
        bottom 0 
        overflow auto             
        .city-title
            line-height .7rem
            text-indent .2rem
            background  $titleBgColor
        .button-item
            overflow hidden
            padding-top .1rem
            padding-right .6rem 
            .items
                float left
                width 33.33%
                box-sizing border-box
                .button
                    text-align center
                    margin 0  0 .1rem .1rem
                    padding .1rem 0 
                    border .03rem solid #eee
                    border-radius .06rem
        .city-item    
            .cityItemName
                padding .2rem        
</style>

