<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  onChanged(dark: boolean) {
    console.log('hello', dark)
  },
})
</script>

<template>
<Icon name="typcn:adjust-brightness" color="white" size="1.3em" class="mode-switch__icon" />
<label class="mode-switch">
  <input type="checkbox" @click="isDark()">
  <span class="slider round"></span>
</label>
<Icon name="ic:outline-nightlight" color="white" size="1.3em" class="mode-switch__icon" />
</template>



<style scoped lang="scss">
/* The switch - the box around the slider */
.mode-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 26px;
  display: flex;
  align-self: center;
  &__icon {
    display: flex;
    align-self: center;
  }
}

/* Hide default HTML checkbox */
.mode-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color:  #5964e0;
  -webkit-transition: .4s;
  transition: .4s;
}

// input:checked + .slider {
//   background-color: #2196F3;
// }

// input:focus + .slider {
//   box-shadow: 0 0 1px #2196F3;
// }

input:checked + .slider:before {
  -webkit-transform: translateX(34px);
  -ms-transform: translateX(34px);
  transform: translateX(34px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>