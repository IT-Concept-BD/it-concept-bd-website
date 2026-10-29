<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const initials = (n: string) => n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
const local = (copy('clients.local') as string[]).map((name) => ({ name, ini: initials(name) }))
const intl = (copy('clients.international') as string[]).map((name) => ({ name, ini: initials(name) }))
</script>

<template>
  <section id="clients" class="sec mist panel">
    <div class="wrap">
      <div class="head rv">
        <div class="stack-lg"><span class="eyebrow">{{ t('clients.eyebrow') }}</span><h2 class="h-lg">{{ t('clients.title') }}</h2></div>
        <p class="sub">{{ t('clients.sub') }}</p>
      </div>
    </div>
    <div class="mq">
      <div class="track"><div v-for="(l, i) in [...local, ...local]" :key="i" class="logo"><i>{{ l.ini }}</i>{{ l.name }}</div></div>
    </div>
    <div class="mq" style="margin-top: 14px">
      <div class="track rev"><div v-for="(l, i) in [...intl, ...intl, ...intl, ...intl]" :key="i" class="logo"><i>{{ l.ini }}</i>{{ l.name }}<small>{{ t('clients.intl') }}</small></div></div>
    </div>
  </section>
</template>
