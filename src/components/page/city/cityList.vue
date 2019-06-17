<template>
        <div class="list" ref="wrapper">
            <div>
                <div class="city-title border-topbottom">当前城市</div>
                <div class="button-item">
                    <div class="items" >
                        <div class="button">
                            {{this.$store.state.city}}</div>
                    </div>
                </div>
                <div class="city-title border-topbottom">热门城市</div>
                <div class="button-item">
                    <div class="items" 
                    v-for="item of hotCities" :key="item.id">
                        <div class="button"
                        @click="handleCityClick(item.name)"
                        >{{item.name}}</div>
                    </div>
                </div>
                <div class="city-item" 
                v-for="(item, key) of cities" 
                :key="key"
                :ref="key">
                        <div class= "city-title border-topbottom">{{key}}</div>
                        <div class= "cityItemName border-bottom" 
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                        >{{innerItem.name}}</div>
                </div>   
            </div>      
        </div>           
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'cityList',
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    watch: {
        letter () {
            if (this.letter) {
                let element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element) 
                }
            }
        },
        methods: {
            handleCityClick(city) {
                this.$store.commit('change',city)
                this.$router.push('/')
            }
        },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
    }
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
        overflow hidden             
        .city-title
            line-height .7rem
            text-indent .2rem
            background  $titleBgColor
        .button-item
            overflow hidden
            padding-top .1rem
            padding-right .45rem 
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

