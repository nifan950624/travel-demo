<template>
<div>
    <city-header></city-header>
    <seach-city
    :cities="cities" 
    ></seach-city>
    <city-list
    :letter="letter" 
    :cities="cities" 
    :hotCities="hotCities"
    ></city-list>
    <city-nav 
    :cities="cities"
    @change="handleChangeClick"
    ></city-nav>  
</div>
</template>

<script>
import axios from 'axios'
import cityHeader from './city/header'
import seachCity from './city/seachCity'
import cityList from './city/cityList'
import cityNav from './city/city-nav'
export default {
    name: 'city',
    components: {
        cityHeader,
        seachCity,
        cityList,
        cityNav
    },
    data(){
        return {
            cities: {},
            hotCities: [],
            letter: ''    
        }
    },
    methods: {
        getCitysMessage(){
            axios.get('/api/city.json').then((responce)=>{
               const allcities = responce.data.data
               this.cities = allcities.cities
               this.hotCities = allcities.hotCities
            })
        },
        handleChangeClick(letter) {
            this.letter = letter
        }
    },
    mounted(){
        this.getCitysMessage()
    }
}
</script>
