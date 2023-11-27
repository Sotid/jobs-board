<script setup lang="ts">
import { useSearch } from '../composables/use-search'
import { useDark } from '@vueuse/core'

const isDark = useDark()
const { filteredJobs } = useSearch()
const shouldShowEmptyResults = computed(() => filteredJobs.value?.length === 0)
</script>

<template>
  <div v-if="shouldShowEmptyResults" class="empty__results" :class="{'empty__results--dark': isDark}">{{ 'No results! Please try again '}}</div>
  <div class="jobs__grid">
  <job-card v-for="job in filteredJobs" :key="job.id" :job="job" />
</div>
</template>

<style scoped lang="scss">
.jobs__grid {
display: grid;
grid-template-columns: repeat(1, minmax(0, 1fr));
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 20px;
grid-row-gap: 50px;
padding: 50px 0;
@include breakpoint(tablet) {
  grid-template-columns: repeat(2, 1fr);
  }
@include breakpoint(desktop) {
  grid-template-columns: repeat(3, 1fr);
  }
}
.empty__results {
  color: black;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
  &--dark {
    color: white;
  }
}

</style>