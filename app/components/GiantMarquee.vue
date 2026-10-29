<script setup lang="ts">
const copy = useCopy()
const words = copy('giant') as string[]
</script>

<template>
  <section class="giant" aria-label="What we do">
    <div class="track">
      <span v-for="(w, i) in [...words, ...words]" :key="i">{{ w }}</span>
    </div>
  </section>
</template>
