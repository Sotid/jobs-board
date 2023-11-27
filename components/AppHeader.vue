<script setup lang="ts">
import ModeSwitch from './ModeSwitch.vue';
import FilterBar  from '@/components/search/FilterBar.vue';
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
    <header class="app-header" :class="{'app-header--dark': isDark}">
        <div class="app-header__wrapper">
            <NuxtLink to="/" class="app-header__title">
                devJobs
            </NuxtLink> 
            <div class="app-header__switch">
                <ModeSwitch />
            </div>
            <FilterBar />
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
position: relative;
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
.app-header--dark {
    background-color: #625a80;
    .app-header__title {
        color: #FFC244FF;
    }
}
</style>