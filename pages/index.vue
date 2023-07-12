<script setup lang="ts">
const { data, error } = useFetch("/api/jobs");
</script>

<template>
  <div class="jobs__grid">
  <job-card v-for="job in data.jobs" :key="job.id" :job="job" />
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

</style>