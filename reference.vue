<script setup >
import { ref } from "vue";

//fetchData
const { data } = useFetch("/api/jobs");

//props
const props = defineProps({
  name: {
    required: true,
  },
  accountContacts: {
    required: true,
  },
});
//data()
const isOpenModal = ref(false);
const isSameContactForAll = ref(
  props.accountContacts[props.name].isSameContactForAll
);

//composables
const storesStore = useStoresStore();

//computed
const accountContact = computed(() => props.accountContacts[props.name]);

const storeMappedList = computed(() =>
  storesStore.storeList.map((store) => ({
    id: store.id,
    value: store.name,
  }))
);
//methods
const handleCancelSetContactForAllStore = () => {
  isOpenModal.value = false;
  isSameContactForAll.value = false;
};
</script>


//watchers
//emits
//slots