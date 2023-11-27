<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
console.log(isDark.value);

const darkClass = computed(() => isDark.value ? 'dark' : '');

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const getDateDif = (targetDate) => {
  const jobDate = new Date(targetDate);
  const currentDate = new Date();
  if(jobDate > currentDate) throw Error('The date must be in the past');
  const diff = Math.abs(currentDate - jobDate);
  return { minutes: Math.floor(diff / 60000),
           hours: Math.floor(diff / (1000 * 60 * 60)), 
           days: Math.floor(diff / (1000 * 60 * 60 * 24)),
           weeks: Math.floor(diff / (1000 * 60 * 60 * 24 * 7))
        };
};

const getPublishedDateText = (date) => {
  const { minutes, hours, days, weeks } = getDateDif(date);
if(minutes >= 1 && minutes < 60){
  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
}
if(hours >= 1 && hours < 24){
  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
}
if(days >= 1 && days < 7){
  return `${days} ${days === 1 ? 'day' : 'days'} ago`;
} 
if(weeks >= 1){
  return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
}
}
</script>

<template>
<article class="card" :class="{'card--dark': darkClass}">
<img src="/fallback.jpg" />
  <div class="card__top"> 
    <p class='card__top__date'>{{ getPublishedDateText(job.created_at)}}</p>
  <p card__top__type>{{ job.type }}</p>
</div>
<div class="card__middle"> 
  <p class="card__title">{{ job.title }}</p>
  <p class="card__company">{{ job.company }}</p>
</div>
  <p class="card__location">{{ job.location }}</p>
</article>
</template>

<style scoped lang="scss">
.card {
  background-color: white;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  position:relative;

  img {
    border-radius: 8px;
    width:40px;
    height:40px;
    position:absolute;
    top: -20px;
  }

  &__top {
    display:flex;
    color:#878b8e;
    margin: 16px 0 12px;
    font-size: 14px;

    &__date{

      &::after {
        content: '·';
        margin: 0 6px;
      }
    }
  }  
  &__middle {
    margin-bottom: 42px;
  }
  &__title {
    font-weight: 800;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
      min-height: 48px;
  }  
  &__company {
    color:#878b8e;
    font-size: 13px;
  } 
  &__location {
    margin:0;
    color: #7372c9;
    font-size: 12px;
    font-weight:800;
  } 

  &--dark { 
    .card__top, 
    .card__company {
      color: white;
    }
    .card__location {
      color:#FFC244FF

    }
    color:white;
    background-color: #00000099;
  }
}
</style>