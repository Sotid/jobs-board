import {useJobs} from "./use-jobs";

const searchQuery = ref('');
const selectedCity = ref('');
const fullTime = ref(false);


export function useSearch() {
  const { data } = useJobs();

const hasActiveFilters = computed(() =>  searchQuery.value || selectedCity.value || fullTime.value)
  const filteredJobs = computed(() => {
    if(!hasActiveFilters) return data.value?.jobs

    let filteredArray = data.value?.jobs
    if(searchQuery.value){ 
      filteredArray = filteredArray?.filter((job) => job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.value.toLowerCase()))
    }
    if(selectedCity.value){
      filteredArray = filteredArray?.filter((city) => city.location.includes(selectedCity.value)) 
    }
    if(fullTime.value){
      filteredArray = filteredArray?.filter((job) => job.type === 'Full Time') 
    }
    return filteredArray
  }) 


  const availableCountries = computed(() => {
    const mappedCountries = data.value?.jobs.map((job) => job.location)
  
    return new Set(mappedCountries);
  })
  const clearFilters = () => {
    searchQuery.value = ''
    selectedCity.value = ''
    fullTime.value = false
  }

    return {
      searchQuery,
      selectedCity,
      fullTime,
      filteredJobs,
      availableCountries,
      clearFilters,
      hasActiveFilters,
    }
}


