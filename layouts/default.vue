<template>
    <main class="default-layout">
    <slot />
    </main>
</template>

<style scoped lang="scss">
.default-layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    @include breakpoint(desktop) {
        padding: 0 0;
    }
}

</style>