<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const words = copy('hero.words') as { w: string; hl?: boolean }[]
const hlStart = words.findIndex((w) => w.hl)
const hl = words.filter((w) => w.hl)
const before = words.slice(0, hlStart)
const after = words.slice(hlStart + hl.length)
const { p, start } = useCountUp(1600)
onMounted(() => start(700))
const n220 = computed(() => Math.round(220 * p.value))
const n99 = computed(() => Math.round(99 * p.value))
const faces = [
  { bg: '#1a1a1b', t: 'BG' }, { bg: '#c9282c', t: 'GC' }, { bg: '#3f403c', t: 'BD' }, { bg: '#838284', t: 'TX' },
]
</script>

<template>
  <section id="hero" class="hero">
    <div class="wrap">
      <div class="stack-lg">
        <h1 class="h-xl">
          <template v-for="(w, i) in before" :key="'b' + i"><span class="mk" :style="{ '--i': i }"><span>{{ w.w }}</span></span>{{ ' ' }}</template>
          <em class="hl"><template v-for="(w, i) in hl" :key="'h' + i"><span class="mk" :style="{ '--i': before.length + i }"><span>{{ w.w }}</span></span>{{ ' ' }}</template></em>{{ ' ' }}
          <template v-for="(w, i) in after" :key="'a' + i"><span class="mk" :style="{ '--i': before.length + hl.length + i }"><span>{{ w.w }}</span></span>{{ ' ' }}</template>
        </h1>
        <p class="lead up d2" style="max-width: 560px">{{ t('hero.lead') }}</p>
        <div class="btns up d3">
          <a class="btn" href="#contact">{{ t('hero.start') }}<span class="dot"><AppIcon name="arrow" /></span></a>
          <a class="btn ghost" href="#work">{{ t('hero.portfolio') }}</a>
        </div>
        <div class="trust up d4">
          <div class="faces" aria-hidden="true"><span v-for="f in faces" :key="f.t" :style="{ background: f.bg }">{{ f.t }}</span></div>
          <p><b>{{ t('hero.trustBold') }}</b> {{ t('hero.trustRest') }}</p>
        </div>
      </div>

      <div class="viz" aria-hidden="true">
        <div class="hring">
          <svg viewBox="0 0 520 520"><g fill="none" stroke-width="30" stroke-linecap="round" transform="rotate(-100 260 260)"><circle cx="260" cy="260" r="240" stroke="#3F403C" stroke-dasharray="360 1148" /><circle cx="260" cy="260" r="240" stroke="#838284" stroke-dasharray="330 1178" stroke-dashoffset="-400" /><circle cx="260" cy="260" r="240" stroke="#B7B8B9" stroke-dasharray="250 1258" stroke-dashoffset="-770" /><circle cx="260" cy="260" r="240" stroke="#DB2B2F" stroke-dasharray="380 1128" stroke-dashoffset="-1060" /></g></svg>
        </div>
        <div class="orbit"><i /></div>
        <div class="plx a">
          <div class="lap">
            <div class="bro">
              <div class="bar"><i /><i /><i /><span>{{ t('hero.mockUrl') }}</span></div>
              <div class="body">
                <div class="hb"><b>{{ t('hero.mockTitle') }}</b><small>{{ t('hero.mockSub') }}</small></div>
                <div class="r3"><i /><i /><i /></div>
                <div class="bars"><i style="height:40%" /><i style="height:62%" /><i style="height:48%" /><i style="height:80%" /><i style="height:66%" /><i style="height:100%" /></div>
                <span class="sk" style="width: 70%" />
              </div>
            </div>
          </div>
        </div>
        <div class="plx b"><div class="phone"><div class="scr"><div class="top" /><div class="ln" /><div class="ln s" /><div class="ln" /></div></div></div>
        <div class="float f1"><div><b>{{ n220 }}+</b><small>{{ t('hero.projects') }}</small></div></div>
        <div class="float f2"><div class="meter" :style="{ '--pc': n99 }" /><div><b>{{ n99 }}%</b><small>{{ t('hero.satisfaction') }}</small></div></div>
        <div class="float f3"><span class="ckd"><AppIcon name="check" /></span><div><b>{{ t('hero.approved') }}</b><small>{{ t('hero.approvedSub') }}</small></div></div>
      </div>
    </div>
  </section>
</template>
