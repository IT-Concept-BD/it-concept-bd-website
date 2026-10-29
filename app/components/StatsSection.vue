<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const items = copy('stats.items') as { n: number; suf: string; label: string }[]
const el = ref<HTMLElement | null>(null)
const p = useCountOnView(el)
</script>

<template>
  <section id="stats" ref="el" class="stats" :aria-label="t('stats.label')">
    <div class="wrap rvs">
      <div v-for="s in items" :key="s.label" class="stat" :style="{ '--pc': Math.round(p * 100) }">
        <b>{{ Math.round(s.n * p) }}<span class="sfx">{{ s.suf }}</span></b>
        <small>{{ s.label }}</small>
      </div>
    </div>
  </section>
</template>
