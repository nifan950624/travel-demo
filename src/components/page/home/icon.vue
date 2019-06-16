<template>
    <section class="home-icons">
         <swiper :options="swiperOption">
            <swiper-slide class="swiper-icons" v-for="(page, index) of pages" :key="index">
                <div class="placeholder" v-for="item of page" :key="item.id">
                    <div class="placeholder-img">
                        <img class="img-icon" :src="item.imgUrl">
                    </div>
                <p class="spot">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
export default {
    name: 'homeIcon',
    props: {
        iconList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
            },
        }
    },
    computed: {
        pages() {
            const pages = []
                this.iconList.forEach((item, index)=>{
                    const page = Math.floor(index/8) //向下取整
                    if (!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages        
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/global.styl'
    @import '~style/fontdote.styl'    
    .home-icons >>>.swiper-pagination.swiper-pagination-bullets
        transform : translateY(.2rem) 
    .home-icons >>>.swiper-pagination-bullet.swiper-pagination-bullet-active
        background-color: $bgColor
    .swiper-icons
        margin-top: .1rem
        height: 0
        padding-bottom: 54%
        .placeholder
            float: left
            height: 0
            width: 25%
            padding-bottom: 25%
            overflow: hidden
            position: relative
            .placeholder-img
                position: absolute
                left: 0
                top: 0
                right: 0
                bottom: .4rem
                padding: .1rem 0 
                .img-icon
                    display: block 
                    height: 100%
                    margin: 0 auto  
            .spot
                position: absolute
                left: 0
                bottom: 0
                right: 0
                height: .4rem
                line-height: .4rem 
                text-align: center 
                color: $textColor
                ellipsis()
                
</style>
