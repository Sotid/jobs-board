<script setup lang="ts">
import LocationDropdown from './LocationDropdown.vue';
import SearchInput from './SearchInput.vue';
import FullTimeFilter from './FullTimeFilter.vue';
import {useSearch} from '@/composables/use-search';

const {clearFilters, hasActiveFilters} = useSearch();
</script>

<template>
<div class="filter-bar__container"> 
  <div class="filter-bar__left" >
  <SearchInput />
  <LocationDropdown />
  </div>
  <div class="filter-bar__right"> 
  <FullTimeFilter />
  <button v-if= "hasActiveFilters" class="filter-bar__button" @click="clearFilters">Clear all</button>
</div>
</div>
</template>


<style scoped lang="scss">
.filter-bar {
 &__container {
  position: absolute;
  top: 85px;
  display: flex;
  height: 50px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
  align-items: center;
  border: none;
  margin: 0 auto;
  padding: 0 1rem;
  left: 14px;
  right: 14px;
 }
 &__left {
  width:70%;
  display:flex;
 }
 &__right {
  display: flex;
  justify-content: space-between ;
  flex: 1;
 }
 &__button {
  background-color: #5964e0;
  font-weight: 500;
  color: white;
  border:none;
  border-radius: 8px;
 }

}

</style>