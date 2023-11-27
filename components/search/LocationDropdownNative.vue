<script setup lang="ts">
import {useSearch} from '@/composables/use-search';
const {availableCountries, selectedCity} = useSearch();
</script>

<template>
<div class="dropdown__container"> 
<select class="dropdown__select" v-model="selectedCity">
  <option value="">All cities</option>
  <option v-for="country in availableCountries" :value="country" >{{ country }}</option></select>
</div>
</template>
<style scoped lang="scss">
.dropdown {
 &__container {
  position: relative;
  display: flex;
  height: 50px;
  border: 1px solid black;
  max-width: 500px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border: none;
  select {
  display: none; /*hide original SELECT element: */
}
 }
 &__select {
  border:none;
  outline: 0;
  width: 400px;
 }

}

</style>