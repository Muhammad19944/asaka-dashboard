<template>
  <div>
    <p>{{ $t('hi') }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import useAxios from "@/composables/useAxios"
const axios = useAxios()

onMounted(() => axios.get("survey/").then(({ data }) => console.log(data)))
</script>
