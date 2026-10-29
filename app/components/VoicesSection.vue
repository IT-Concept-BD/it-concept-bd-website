<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const voices = copy('voices.items') as { name: string; role: string; ini: string; quote: string }[]

const index = ref(0)
const flip = ref(0) // alternates the animation name so the quote re-animates on each change
const hold = ref(false)
const go = (d: number) => { index.value = (index.value + d + voices.length) % voices.length; flip.value++ }
const pick = (i: number) => { index.value = i; flip.value++ }
const v = computed(() => voices[index.value]!)

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => { timer = setInterval(() => { if (!hold.value) go(1) }, 7000) })
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <section id="voices" class="sec dark voices panel" @mouseenter="hold = true" @mouseleave="hold = false">
    <svg class="bgring" viewBox="0 0 520 520" aria-hidden="true"><g fill="none" stroke-width="30" stroke-linecap="round"><circle cx="260" cy="260" r="240" stroke="#3F403C" stroke-dasharray="360 1148" /><circle cx="260" cy="260" r="240" stroke="#838284" stroke-dasharray="330 1178" stroke-dashoffset="-400" /><circle cx="260" cy="260" r="240" stroke="#DB2B2F" stroke-dasharray="380 1128" stroke-dashoffset="-1060" /></g></svg>
    <div class="wrap">
      <div class="vwrap">
        <div class="vside rv">
          <div class="stack-lg" style="gap: 20px"><span class="eyebrow">{{ t('voices.eyebrow') }}</span><h2 class="h-md">{{ t('voices.title') }}</h2></div>
          <div class="stack-lg" style="gap: 20px">
            <div class="vtabs"><button v-for="(x, i) in voices" :key="x.ini" class="vt" :class="{ on: i === index }" :aria-label="x.name" @click="pick(i)">{{ x.ini }}</button></div>
            <div class="varrows">
              <button class="varr" :aria-label="t('ui.prevQuote')" @click="go(-1)"><AppIcon name="back" /></button>
              <button class="varr" :aria-label="t('ui.nextQuote')" @click="go(1)"><AppIcon name="arrow" /></button>
            </div>
          </div>
        </div>
        <div class="vq">
          <div class="qmark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 17.5C4 12 6.5 8 11 6l1 1.6C9.6 9 8.6 10.4 8.4 12H11v6H4v-.5zM13 17.5C13 12 15.5 8 20 6l1 1.6c-2.4 1.4-3.4 2.8-3.6 4.4H20v6h-7v-.5z" /></svg></div>
          <p class="vtext" :class="flip % 2 ? 'qb' : 'qa'">{{ v.quote }}</p>
          <div class="stack-lg" style="gap: 24px">
            <div class="who"><span class="av">{{ v.ini }}</span><div><b>{{ v.name }}</b><small>{{ v.role }}</small></div></div>
            <div class="vbar"><i :class="flip % 2 ? 'pb' : 'pa'" :key="flip" /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
