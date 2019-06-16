<template>
<div>
    <city-header></city-header>
    <seach-city></seach-city>
    <city-list></city-list>
    <city-nav></city-nav>  
</div>
</template>

<script>
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
    }
}
</script>
