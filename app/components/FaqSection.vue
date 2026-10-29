<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const faqs = copy('faq.items') as { q: string; a: string }[]
const open = ref(0)
</script>

<template>
  <section id="faq" class="sec">
    <div class="wrap">
      <div class="faqw">
        <div class="stack-lg rv">
          <span class="eyebrow">{{ t('faq.eyebrow') }}</span>
          <h2 class="h-lg">{{ t('faq.title') }}</h2>
          <p class="sub">{{ t('faq.sub') }}</p>
          <div><a class="btn ghost" href="#contact">{{ t('faq.cta') }}</a></div>
        </div>
        <div class="faqs rvs">
          <div v-for="(f, i) in faqs" :key="f.q" class="faqi" :class="{ open: open === i }">
            <button class="q" :aria-expanded="open === i" @click="open = open === i ? -1 : i">
              <span>{{ f.q }}</span><span class="pl"><AppIcon name="plus" /></span>
            </button>
            <div v-if="open === i" class="faqa">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
