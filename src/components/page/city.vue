<template>
<div>
    <city-header></city-header>
    <seach-city></seach-city>
    <city-list 
    :cities="cities" 
    :hotCities="hotCities"
    ></city-list>
    <city-nav :cities="cities"></city-nav>  
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
        }
    },
    methods: {
        getCitysMessage(){
            axios.get('/api/city.json').then((responce)=>{
               const allcities = responce.data.data
               this.cities = allcities.cities
               this.hotCities = allcities.hotCities
            })
        }
    },
    mounted(){
        this.getCitysMessage()
    }
}
</script>
