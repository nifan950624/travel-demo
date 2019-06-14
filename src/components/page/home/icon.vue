<template>
    <section class="home-icons">
        <div class="placeholder" v-for="item of iconList" :key="item.id">
            <div class="placeholder-img">
                <img class="img-icon" :src="item.iconUrl">
            </div>
        <p class="spot">{{item.iconText}}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'homeIcon',
    data() {
        return {
            iconList: [
                {id: '0001', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',iconText: '景点门票'},
                {id: '0002', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',iconText: '一日游'},
                {id: '0003', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',iconText: '武汉必游'},
                {id: '0004', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',iconText: '亲子游'},
                {id: '0005', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',iconText: '木兰天池'},
                {id: '0006', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',iconText: '动植物园'},
                {id: '0007', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',iconText: '水上玩乐'},
                {id: '0008', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',iconText: '武汉欢乐谷'}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~style/global.styl'
    .home-icons
        margin-top: .1rem
        height: 0
        overflow: hidden
        padding-bottom: 50%
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
                

</style>
