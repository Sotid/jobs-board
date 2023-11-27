<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
<AppHeader class="default-layout__header" />
<main class="default-layout"  :class="{'default-layout--dark': isDark}">
<slot />
</main>
</template>

<style scoped lang="scss">
.default-layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    &--dark {
        background-color: #292929FF;
        font-family: 'Roboto', sans-serif;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }
}

</style>