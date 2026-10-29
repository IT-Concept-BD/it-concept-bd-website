<script setup lang="ts">
const { t } = useI18n()
const copy = useCopy()
const items = copy('services.items') as { key: string; icon: string; tab: string; chip: string; title: string; lead: string; checks: string[]; link: string; href: string }[]
const m = copy('services.mock') as Record<string, string>
const selected = useSelectedService()

const open = ref(0)
let timer: ReturnType<typeof setTimeout> | undefined
// Hover opens a panel after a short intent delay; click opens at once.
const hover = (i: number) => { clearTimeout(timer); timer = setTimeout(() => (open.value = i), 130) }
const leave = () => clearTimeout(timer)
const pick = (i: number) => { clearTimeout(timer); open.value = i }
onBeforeUnmount(() => clearTimeout(timer))
</script>

<template>
  <section id="services" class="sec">
    <div class="wrap">
      <div class="head rv">
        <div class="stack-lg"><span class="eyebrow">{{ t('services.eyebrow') }}</span><h2 class="h-lg">{{ t('services.title') }}</h2></div>
        <p class="sub">{{ t('services.sub') }}</p>
      </div>
      <div class="xa">
        <article
          v-for="(s, i) in items" :key="s.key" class="xp" :class="[`v${i + 1}`, { open: open === i }]"
          @mouseenter="hover(i)" @mouseleave="leave" @click="pick(i)"
        >
          <div class="cl">
            <span class="it"><AppIcon :name="s.icon" /></span>
            <span class="xt">{{ s.tab }}</span>
            <span class="pl"><AppIcon name="plus" /></span>
          </div>
          <div v-if="open === i" class="op">
            <span class="it"><AppIcon :name="s.icon" /></span>
            <h3>{{ s.title }}</h3>
            <p class="lead">{{ s.lead }}</p>
            <ul class="checks"><li v-for="c in s.checks" :key="c">{{ c }}</li></ul>
            <div><a class="tlink" :href="s.href" @click="selected = s.chip">{{ s.link }}<AppIcon name="arrow" /></a></div>

            <div class="sv2">
              <div v-if="s.key === 'web'" class="bro">
                <div class="bar"><i /><i /><i /><span>{{ m.shopUrl }}</span></div>
                <div class="body">
                  <div class="hb"><b>{{ m.shopTitle }}</b><small>{{ m.shopSub }}</small></div>
                  <div class="r3"><i /><i /><i /></div>
                  <div class="bars"><i style="height:35%" /><i style="height:55%" /><i style="height:45%" /><i style="height:75%" /><i style="height:90%" /><i style="height:100%" /></div>
                </div>
              </div>

              <div v-else-if="s.key === 'soft'" class="pos">
                <div class="card">
                  <div v-for="n in 4" :key="n" class="item" :style="n === 4 ? 'background:var(--red);color:#fff' : ''"><span>{{ m.item }} {{ n }}</span><span>{{ m.price }}</span></div>
                </div>
                <div class="card">
                  <small class="small">{{ m.total }}</small><div class="tot">{{ m.price }}</div>
                  <div class="bars" style="height:60px"><i style="height:50%" /><i style="height:80%" /><i style="height:60%" /><i style="height:100%" /></div>
                </div>
              </div>

              <div v-else-if="s.key === 'brand'" class="swatches">
                <i style="background:#fff" /><i style="background:#db2b2f" /><img src="/logo.jpeg" alt=""><i style="background:#838284" /><i style="background:#b7b8b9" />
              </div>

              <div v-else-if="s.key === 'mkt'" class="chartcard">
                <div class="k"><div><small class="small">{{ m.visitors }}</small><br><b>{{ m.visitorsN }}</b></div><span>{{ m.visitorsPc }}</span></div>
                <div class="line"><svg viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true"><path d="M0 80 L60 66 L120 72 L180 44 L240 52 L300 24 L400 8" fill="none" stroke="#DB2B2F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /><path d="M0 80 L60 66 L120 72 L180 44 L240 52 L300 24 L400 8 L400 90 L0 90Z" fill="#DB2B2F" opacity=".1" /></svg></div>
                <div class="bars" style="height:50px"><i style="height:30%" /><i style="height:50%" /><i style="height:40%" /><i style="height:70%" /><i style="height:60%" /><i style="height:100%" /></div>
              </div>

              <div v-else-if="s.key === 'host'" class="server">
                <div><i />{{ m.srv1 }}<b>{{ m.srv1s }}</b></div>
                <div><i />{{ m.srv2 }}<b>{{ m.srv2s }}</b></div>
                <div><i />{{ m.srv3 }}<b>{{ m.srv3s }}</b></div>
                <div><i />{{ m.srv4 }}<b>{{ m.srv4s }}</b></div>
              </div>

              <div v-else class="ticket">
                <div class="on"><span class="av" style="background:var(--red)">BG</span><span><b>{{ m.t1 }}</b><small>{{ m.t1s }}</small></span><em>{{ m.t1b }}</em></div>
                <div><span class="av">TX</span><span><b>{{ m.t2 }}</b><small>{{ m.t2s }}</small></span><em>{{ m.t2b }}</em></div>
                <div><span class="av">CL</span><span><b>{{ m.t3 }}</b><small>{{ m.t3s }}</small></span><em>{{ m.t3b }}</em></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
