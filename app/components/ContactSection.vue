<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const services = copy('contact.services') as string[]
const selected = useSelectedService()
const sent = ref(false)
const confetti = Array.from({ length: 12 }, (_, i) => ({ i, a: i * 30, d: i % 2 ? 190 : i % 4 === 0 ? 150 : 200 }))

const info = computed(() => [
  { icon: 'phone', label: t('contact.phoneLabel'), value: t('contact.phone') },
  { icon: 'mail', label: t('contact.emailLabel'), value: t('contact.email') },
  { icon: 'pin', label: t('contact.officeLabel'), value: t('contact.office') },
])

// Front-end only for now: the form shows the success state. Wire the request here when the backend is ready.
const submit = () => { sent.value = true }
</script>

<template>
  <section id="contact" class="sec mist panel">
    <div class="wrap">
      <div class="cgrid">
        <div class="stack-lg rv" style="gap: 32px">
          <span class="eyebrow">{{ t('contact.eyebrow') }}</span>
          <h2 class="h-lg">{{ t('contact.title') }}</h2>
          <p class="lead">{{ t('contact.lead') }}</p>
          <div class="cinfo">
            <div v-for="c in info" :key="c.label" class="ci">
              <span class="n"><AppIcon :name="c.icon" /></span>
              <div><small>{{ c.label }}</small><b>{{ c.value }}</b></div>
            </div>
          </div>
          <div class="map" aria-hidden="true">
            <i class="rv2" /><i class="rd1" /><i class="rd2" /><i class="pin" />
            <div class="lb"><b>{{ t('contact.mapName') }}</b><small>{{ t('contact.mapAddress') }}</small></div>
          </div>
        </div>

        <div class="rv">
          <div v-if="sent" class="ok">
            <i v-for="c in confetti" :key="c.i" class="cf" :style="{ '--i': c.i, '--a': c.a + 'deg', '--d': c.d + 'px' }" />
            <span class="tick"><AppIcon name="check" /></span>
            <h3 class="h-md">{{ t('contact.sentTitle') }}</h3>
            <p>{{ t('contact.sentText') }}</p>
            <button class="btn light" @click="sent = false">{{ t('contact.again') }}<span class="dot"><AppIcon name="arrow" /></span></button>
          </div>
          <form v-else class="form" @submit.prevent="submit">
            <h3 class="h-sm">{{ t('contact.formTitle') }}</h3>
            <div class="g2">
              <div class="fld"><label for="n1">{{ t('contact.name') }}</label><input id="n1" type="text" :placeholder="t('contact.namePh')"></div>
              <div class="fld"><label for="e1">{{ t('contact.emailField') }}</label><input id="e1" type="email" :placeholder="t('contact.emailPh')"></div>
            </div>
            <div class="fld"><label for="p1">{{ t('contact.phoneField') }}</label><input id="p1" type="tel" :placeholder="t('contact.phonePh')"></div>
            <div class="fld">
              <label>{{ t('contact.serviceType') }}</label>
              <div class="opts"><button v-for="s in services" :key="s" type="button" class="chip" :class="{ on: s === selected }" @click="selected = s">{{ s }}</button></div>
            </div>
            <div class="fld"><label for="m1">{{ t('contact.details') }}</label><textarea id="m1" rows="5" :placeholder="t('contact.detailsPh')" /></div>
            <div class="fnote">
              <span class="secure"><AppIcon name="lock" />{{ t('contact.private') }}</span>
              <button class="btn red" type="submit">{{ t('contact.send') }}<span class="dot"><AppIcon name="arrow" /></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
