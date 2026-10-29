<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const quick = copy('footer.quickLinks') as { label: string; href: string }[]
const services = copy('footer.serviceLinks') as { label: string; href: string }[]
const social = [
  { icon: 'facebook', label: 'Facebook' }, { icon: 'linkedin', label: 'LinkedIn' }, { icon: 'instagram', label: 'Instagram' },
]
</script>

<template>
  <footer class="foot">
    <div class="wrap">
      <div class="fcta">
        <span class="eyebrow" style="color: #fff; margin-bottom: 36px">{{ t('footer.eyebrow') }}</span>
        <h2>
          <span class="mk" style="--i: 0"><span>{{ t('footer.line1') }}</span></span>
          <span class="mk" style="--i: 1"><span>{{ t('footer.line2') }} <span class="r">{{ t('footer.line2Accent') }}</span></span></span>
        </h2>
        <div class="row2">
          <p class="lead" style="max-width: 460px; color: var(--silver)">{{ t('footer.lead') }}</p>
          <div class="btns"><a class="btn red" href="#contact">{{ t('footer.start') }}<span class="dot"><AppIcon name="arrow" /></span></a></div>
        </div>
      </div>
      <div class="fgrid">
        <div>
          <span class="ltile"><img src="/logo.jpeg" :alt="t('meta.logoAlt')"></span>
          <p>{{ t('footer.about') }}</p>
          <div class="soc"><a v-for="s in social" :key="s.label" href="#top" :aria-label="s.label"><AppIcon :name="s.icon" /></a></div>
        </div>
        <div><h4>{{ t('footer.quick') }}</h4><ul><li v-for="l in quick" :key="l.label"><a :href="l.href">{{ l.label }}</a></li></ul></div>
        <div><h4>{{ t('footer.servicesTitle') }}</h4><ul><li v-for="l in services" :key="l.label"><a :href="l.href">{{ l.label }}</a></li></ul></div>
        <div>
          <h4>{{ t('footer.contactTitle') }}</h4>
          <ul><li><a href="#contact">{{ t('contact.phone') }}</a></li><li><a href="#contact">{{ t('contact.email') }}</a></li><li><a href="#contact">{{ t('contact.office') }}</a></li></ul>
        </div>
      </div>
      <div class="copy"><span>{{ t('footer.copy') }}</span></div>
    </div>
    <div class="wordmark" aria-hidden="true">{{ t('footer.wordmark') }}</div>
  </footer>
</template>
