<script setup lang="ts">
defineProps<{ title: string; desc: string; cats: string[]; stack: string; art: string }>()
const emit = defineEmits<{ close: [] }>()
const { t } = useI18n()
const copy = useCopy()
const results = copy('portfolio.case.results') as { n: string; label: string }[]

const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') emit('close') }
onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <div class="mod" @click="emit('close')">
    <div class="modp" role="dialog" aria-modal="true" :aria-label="title" @click.stop>
      <button class="modx" :aria-label="t('ui.closeCase')" @click="emit('close')"><AppIcon name="close" /></button>
      <div class="cs">
        <div class="stack-lg">
          <div class="tags"><span v-for="c in cats" :key="c" class="tag"><i />{{ c }}</span></div>
          <h2 class="h-lg" style="max-width: 820px">{{ title }}</h2>
          <p class="lead" style="max-width: 720px">{{ desc }}</p>
        </div>
        <div class="csfacts">
          <div><span>{{ t('portfolio.case.client') }}</span><b>{{ title }}</b></div>
          <div><span>{{ t('portfolio.case.services') }}</span><b>{{ cats.join(', ') }}</b></div>
          <div><span>{{ t('portfolio.case.built') }}</span><b>{{ stack }}</b></div>
          <div><span>{{ t('portfolio.case.year') }}</span><b>{{ t('portfolio.case.yearValue') }}</b></div>
        </div>
        <div class="csstage"><ProjectArt :kind="art" /></div>
        <div class="csres"><div v-for="r in results" :key="r.n"><b>{{ r.n }}</b><small>{{ r.label }}</small></div></div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin-top:36px;padding-top:28px;border-top:1px solid var(--line)">
          <p class="small">{{ t('portfolio.case.like') }}</p>
          <a class="btn red" href="#contact" @click="emit('close')">{{ t('portfolio.case.start') }}<span class="dot"><AppIcon name="arrow" /></span></a>
        </div>
      </div>
    </div>
  </div>
</template>
