<template>
  <div class="nav">
    <ul class="navList">
      <li class="alphabet" 
      v-for="item of letters" 
      :key="item"
      @click="handleLetterClick" 
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      :ref="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  nmae: 'cityNav',
  props:{
    cities: Object
  },
  data() {
    return {
        touchStatus: false,
        scrollY : '',
        moveTimer : null 
      }
  },
  computed: {
    letters () {
      let letters = []
      if (this.cities){
        for (let item in this.cities){
          letters.push(item)
        }
        return letters 
      } 
    }
  },
  updated(){
    this.scrollY = this.$refs['A'][0].offsetTop
  },
  methods:{
    handleLetterClick(e) {
     this.$emit('change',e.currentTarget.innerText)
    },
    handleTouchStart(e) {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus){
        if (this.moveTimer){
          clearTimeout('this.moveTimer')
        }
        this.moveTimer = setTimeout(()=>{
          const moverace =  e.touches[0].clientY - 78.2 - this.scrollY
          let index = Math.floor(moverace / 23.6) 
            if (index >= 0 && index < this.letters.length){
              this.$emit('change',this.letters[index])
          }
        },16)
      }
    },
    handleTouchEnd(e) {
      this.touchStatus = false
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~style/global.styl';
  .nav
    position absolute
    top 1.6rem
    bottom 0
    right 0
    display flex
    flex-direction column
    justify-content center
    .navList
      text-align center
      color $bgColor
      .alphabet
        padding .1rem
</style>

