<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <svg class="ico" viewBox="0 0 24 24" aria-hidden="true" v-html="icons[props.name]" />
</template>
