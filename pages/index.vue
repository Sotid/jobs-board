<script setup>
const { data, loading, error } = useFetch("/api/jobs");

console.log(data);
</script>

<template>
  <div>{{ data }}</div>
</template>
