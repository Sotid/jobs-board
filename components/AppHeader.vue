<script setup lang="ts">
import ModeSwitch from './ModeSwitch.vue';

</script>

<template>
<header class="app-header">
    <div class="app-header__wrapper">
    <NuxtLink to="/" class="app-header__title">
        devJobs
    </NuxtLink> 
    <div class="app-header__switch">
    <ModeSwitch />
    </div>
    </div>
    </header>
</template>

<style scoped lang="scss">
.app-header {
border-bottom-left-radius: 0;
background-color:#5964e0;
width:100%;
height: 120px;
@include breakpoint(desktop) {
    border-bottom-left-radius: 60px;
}
&__wrapper {
max-width: 1200px;
margin: 0 auto;
padding: 0 1rem; 
display:flex;
justify-content: space-between;
    }
&__title {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    padding: 1rem;
    display: block;
    @include breakpoint(desktop) {
        padding: 2rem 0 0;
    }
}
&__switch {
    padding: 1rem;
    display: flex;
    column-gap: 0.5rem;
    @include breakpoint(desktop) {
        padding: 2rem 0 0;
    }
}
}
</style>