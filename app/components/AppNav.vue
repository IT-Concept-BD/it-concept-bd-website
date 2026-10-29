<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const items = copy('nav.items') as { id: string; label: string }[]
const active = useScrollSpy(items.map((i) => i.id))
const menu = ref(false)
const href = (id: string) => (id === 'hero' ? '#top' : `#${id}`)
</script>

<template>
  <header class="nav">
    <div class="wrap">
      <a class="brand" href="#top" :aria-label="t('ui.home')">
        <img src="/logo.jpeg" alt="" width="52" height="52">
        <b>{{ t('meta.brand') }} <span>{{ t('meta.brandAccent') }}</span></b>
      </a>
      <nav class="links" :aria-label="t('ui.mainNav')">
        <a v-for="n in items" :key="n.id" :class="{ on: active === n.id }" :href="href(n.id)">{{ n.label }}</a>
      </nav>
      <a class="btn sm nav-cta" href="#contact">{{ t('nav.cta') }}<span class="dot"><AppIcon name="arrow" /></span></a>
      <button class="burger" :aria-label="t('ui.toggleMenu')" @click="menu = !menu">
        <AppIcon :name="menu ? 'close' : 'burger'" />
      </button>
    </div>
    <nav v-if="menu" class="menu" :aria-label="t('ui.mobileNav')">
      <a v-for="n in items" :key="n.id" class="l" :class="{ on: active === n.id }" :href="href(n.id)" @click="menu = false">
        {{ n.label }}<AppIcon name="arrow" />
      </a>
      <a class="btn red" href="#contact" @click="menu = false">{{ t('nav.cta') }}<span class="dot"><AppIcon name="arrow" /></span></a>
    </nav>
  </header>
</template>
