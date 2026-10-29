<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const steps = copy('process.steps') as { title: string; text: string }[]
</script>

<template>
  <section id="process" class="sec">
    <div class="wrap">
      <div class="head rv">
        <div class="stack-lg"><span class="eyebrow">{{ t('process.eyebrow') }}</span><h2 class="h-lg">{{ t('process.title') }}</h2></div>
        <p class="sub">{{ t('process.sub') }}</p>
      </div>
      <div class="steps rvs">
        <div v-for="(s, i) in steps" :key="s.title" class="step">
          <div class="n">{{ i + 1 }}</div><h3>{{ s.title }}</h3><p class="small">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
