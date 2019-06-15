<template>
<div>
    <city-header></city-header>
    <seach-city></seach-city> 
</div>
</template>

<script>
import cityHeader from './city/header'
import seachCity from './city/seachCity'
export default {
    name: 'city',
    components: {
        cityHeader,
        seachCity
    }
}
</script>
