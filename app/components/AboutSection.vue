<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const cards = copy('about.cards') as { icon: string; title: string; text: string }[]
const el = ref<HTMLElement | null>(null)
const p = useCountOnView(el)
</script>

<template>
  <section id="about" class="sec">
    <div class="wrap">
      <div class="bento">
        <div class="bA rv">
          <svg class="bgring" viewBox="0 0 520 520" aria-hidden="true"><g fill="none" stroke-width="30" stroke-linecap="round"><circle cx="260" cy="260" r="240" stroke="#3F403C" stroke-dasharray="360 1148" /><circle cx="260" cy="260" r="240" stroke="#838284" stroke-dasharray="330 1178" stroke-dashoffset="-400" /><circle cx="260" cy="260" r="240" stroke="#DB2B2F" stroke-dasharray="380 1128" stroke-dashoffset="-1060" /></g></svg>
          <div class="stack-lg" style="gap: 24px; position: relative">
            <span class="eyebrow">{{ t('about.eyebrow') }}</span>
            <h2 class="h-lg">{{ t('about.title') }}</h2>
            <p class="lead">{{ t('about.text') }}</p>
          </div>
          <div style="position: relative"><a class="btn light" href="#contact">{{ t('about.cta') }}<span class="dot"><AppIcon name="arrow" /></span></a></div>
        </div>

        <div id="aboutnums" ref="el" class="bB rv">
          <svg class="bgring" style="right:-140px;top:auto;bottom:-280px;opacity:.28;width:560px;height:560px" viewBox="0 0 520 520" aria-hidden="true"><g fill="none" stroke-width="40" stroke-linecap="round"><circle cx="260" cy="260" r="240" stroke="#fff" stroke-dasharray="500 1008" /></g></svg>
          <span class="eyebrow">{{ t('about.expEyebrow') }}</span>
          <div style="position: relative"><div class="big">{{ Math.round(12 * p) }}<span>+</span></div><p>{{ t('about.years') }}</p></div>
          <div class="mini">
            <div><b>{{ Math.round(100 * p) }}%</b><small>{{ t('about.custom') }}</small></div>
            <div><b>{{ Math.round(6 * p) }}</b><small>{{ t('about.core') }}</small></div>
          </div>
        </div>

        <div class="bTs rvs">
          <div v-for="c in cards" :key="c.title" class="bT">
            <span class="n"><AppIcon :name="c.icon" /></span><h4>{{ c.title }}</h4><p>{{ c.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
