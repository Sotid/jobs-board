<template>
<AppHeader class="default-layout__header" />
<main class="default-layout">
    <slot />
</main>
</template>

<style scoped lang="scss">
.default-layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

</style>