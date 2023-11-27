<script setup lang="ts">
import {useSearch} from '@/composables/use-search';
const { fullTime } = useSearch();

</script>

<template>
<div class="full-time-filter__container"> 
  <input type="checkbox" id="full-time" name="full-time" :checked="fullTime" v-model="fullTime" />
  <label class="full-time-filter__label" for="full-time">Full Time Only</label>
</div>
</template>
<style scoped lang="scss">
.full-time-filter {
  &__container{
  margin-left: 10px;
  }
  &__label {
    margin-left: 10px;
  }

}
</style>