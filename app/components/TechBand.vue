<script setup lang="ts">
const copy = useCopy()
const tech = copy('tech') as string[]
</script>

<template>
  <section class="techband" aria-label="Technologies">
    <div class="track"><span v-for="(w, i) in [...tech, ...tech]" :key="i">{{ w }}</span></div>
  </section>
</template>
