
<script setup lang="ts">
import {useSearch} from '@/composables/use-search';
const {availableCountries, selectedCity} = useSearch();
const open = ref( false)
const selectedCityText = computed (() => {
  return  selectedCity.value || 'Select Location'
})
</script>

<template >
  <div class="custom-select"  @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selectedCityText  }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of availableCountries"
        :key="i"
        @click="
          selectedCity = option;
          open = false;
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>



<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 50px;
  line-height: 47px;
}

.custom-select .selected {
  background-color: #fff;
  /* border-radius: 6px; */
  border-right: 2px solid #c9c7c7;
  border-left: 2px solid #c9c7c7;
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  height: 50px;
}

.custom-select .selected.open {
  border: 1px solid #c9c7c7;
  /* border-radius: 6px 6px 0px 0px; */
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: black transparent transparent transparent;
}

.custom-select .items {
  color: black;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #c9c7c7;
  border-left: 1px solid #c9c7c7;
  border-bottom: 1px solid #c9c7c7;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: black;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #c9c7c7;
}

.selectHide {
  display: none;
}
</style>
