<template>
<div>
    <city-header></city-header>
    <seach-city></seach-city>
    <city-list></city-list> 
</div>
</template>

<script>
import cityHeader from './city/header'
import seachCity from './city/seachCity'
import cityList from './city/cityList'
export default {
    name: 'city',
    components: {
        cityHeader,
        seachCity,
        cityList
    }
}
</script>
