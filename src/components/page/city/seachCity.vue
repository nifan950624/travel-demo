<template>
    <div class="city-seach">
        <input class="input-city" 
        v-model="keywords" type="text" 
        placeholder="输入城市或拼音"
        @focus="handleFocus"
        @focusout="handleFocusEnd">
        <div class="seachPage" ref='wrapper'
        v-show="keywords"
        >
            <div>
                <ul class="city-select">
                    <li class="city-item border-topbottom"  
                    v-for="city of list" 
                    :key="city.id"
                     @click.prevent="handleCityClick(city.name)"
                    >{{city.name}}</li>
                    <li class="city-item" v-show="!list.length">没有搜索到匹配内容</li>
                </ul>
            </div>     
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'seachCity',
    props: {
        cities : Object
    },
    data() {
        return {
            keywords : '',
            timer: null,
            list: []
        }
    },
    watch: {
        keywords () {
            if (this.timer) {
                clearTimeout(this.timer)
            } 
            if (!this.keywords){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                let list = []
                for (let i in this.cities){
                    this.cities[i].map((item) => {
                        if (item.spell.indexOf(this.keywords) > -1 || item.name.indexOf(this.keywords) > -1){
                            list.push(item)
                        } 
                    })
                }
                this.list = list
            },160)    
        }
    },
    methods: {
        handleCityClick(city) {
            this.$store.commit('change',city)
            this.keywords = ''
            this.$router.push('/')
        },
        handleFocus(e) {
            e.path[0].setAttribute('placeholder','')
        },
        handleFocusEnd(e) {
            e.path[0].setAttribute('placeholder','输入城市或拼音')
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,
        {
            click: true
        }) 
    },        
}
</script>

<style lang="stylus" scoped>
    @import '~style/global'
    .border-topbottom
        &:after
          border-color #666 
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
            padding 0 .2rem
            text-align center
            color #666
            border-radius .06rem 
        .seachPage
            position absolute
            top 1.6rem
            bottom 0
            left 0
            right 0  
            background #fff
            z-index 1
            overflow hidden 
            .city-item
                background #fff
                padding .2rem 0 
                text-indent .1rem      
</style>