<script setup>
const { data, loading, error } = useFetch("/api/jobs");

</script>

<template>
  <div>{{ data }}</div>
</template>
