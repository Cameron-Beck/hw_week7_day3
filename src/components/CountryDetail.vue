<template lang="html">
  <div id="country-detail-container"v-if="country" class="">
    <h3>{{country.name}}</h3>
    <p>{{country.capital}}</p>
    <img id="country-flag" :src= 'country.flag' alt="">


  </div>
</template>

<script>

export default {
  name:'country-detail',
  props: ['country']
}
</script>

<style lang="css" scoped>

</style>
