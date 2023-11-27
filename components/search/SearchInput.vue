<script setup lang="ts">
import {useSearch} from '@/composables/use-search';
import debounce from 'lodash/debounce'

const {searchQuery} = useSearch();
const onInput = (e:any) => {
  const debouncedSearchQuery = debounce(() => {
        searchQuery.value = e.target.value
      }, 500)
      debouncedSearchQuery()
    }

const clearInput = () => { searchQuery.value = ''}

</script>

<template>
<div class="search-input__container"> 
<Icon  class="search-input__icon" name="fa:search" color="#5964e0" size="1.3em"  />
<input type="text" class="search-input__input" :value="searchQuery" @input="onInput" placeholder="Filter by title, companies, expertise..."/>
<div class="search-input__icon pointer"> 
<Icon v-if="searchQuery"  name="ic:outline-close" color="black" size="1.3em" @click="clearInput" />
</div>
</div>
</template>
<style scoped lang="scss">
.search-input {
 &__container {
  display: flex;
  height: 50px;
  border: 1px solid black;
  max-width: 500px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border: none;
 }
 &__input {
  border:none;
  outline: 0;
  width: 300px;
 }
 &__icon {
  width: 50px;
  display: flex;
  justify-content: center;
  &.pointer {
    cursor: pointer;
  }
 }
}
</style>