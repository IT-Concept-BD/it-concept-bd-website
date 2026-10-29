<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const includes = copy('domain.includes') as string[]
const tlds = copy('domain.tlds') as string[]
const selected = useSelectedService()

const domain = ref('yourbrand')
const tld = ref('.com.bd')
const full = computed(() => (domain.value || 'yourbrand').toLowerCase().replace(/\s+/g, '') + tld.value)
</script>

<template>
  <section id="domain" class="sec">
    <div class="wrap">
      <div class="domc rv">
        <div class="stack-lg">
          <span class="eyebrow" style="color: #fff">{{ t('domain.eyebrow') }}</span>
          <h2 class="h-lg">{{ t('domain.title') }}</h2>
          <p class="t">{{ t('domain.text') }}</p>
          <div class="incl"><span v-for="i in includes" :key="i">{{ i }}</span></div>
        </div>
        <div class="dbox">
          <label for="dm">{{ t('domain.label') }}</label>
          <div class="dform">
            <input id="dm" v-model="domain" class="in1" type="text" :placeholder="t('domain.placeholder')">
            <a class="btn sm" href="#contact" @click="selected = 'Domain & Hosting'">{{ t('domain.check') }}<span class="dot"><AppIcon name="arrow" /></span></a>
          </div>
          <div class="opts"><button v-for="d in tlds" :key="d" class="chip" :class="{ on: d === tld }" @click="tld = d">{{ d }}</button></div>
          <div class="dres"><span>{{ full }}</span><small>{{ t('domain.preview') }}</small></div>
        </div>
      </div>
    </div>
  </section>
</template>
