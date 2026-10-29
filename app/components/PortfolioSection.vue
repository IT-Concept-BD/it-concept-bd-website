<script setup lang="ts">
type Project = { name: string; cats: string[]; art: string; desc: string; stack: string; ph?: boolean }
const { t } = useI18n()
const copy = useCopy()
const filters = copy('portfolio.filters') as { id: string; label: string }[]
const projects = copy('portfolio.items') as Project[]

const filter = ref('All')
const active = ref(0)
const swap = ref(0) // flips on each change so the stage cross-fades
const modal = ref(false)

const visible = computed(() =>
  projects.map((p, i) => ({ ...p, i })).filter((p) => filter.value === 'All' || p.cats.includes(filter.value)),
)
const current = computed(() => (visible.value.find((p) => p.i === active.value) ?? visible.value[0])!)

const setFilter = (id: string) => {
  filter.value = id
  active.value = visible.value[0]?.i ?? 0
  swap.value++
}
const hover = (i: number) => { if (active.value !== i) { active.value = i; swap.value++ } }
const click = (i: number) => (active.value === i ? (modal.value = true) : hover(i))

watch(modal, (open) => { document.documentElement.classList.toggle('modal-open', open) })
onBeforeUnmount(() => document.documentElement.classList.remove('modal-open'))
</script>

<template>
  <section id="work" class="sec mist panel">
    <div class="wrap">
      <div class="head rv">
        <div class="stack-lg"><span class="eyebrow">{{ t('portfolio.eyebrow') }}</span><h2 class="h-lg">{{ t('portfolio.title') }}</h2></div>
        <p class="sub">{{ t('portfolio.sub') }}</p>
      </div>
      <div class="pf">
        <div class="pflist">
          <div class="pftop">
            <button v-for="f in filters" :key="f.id" class="chip" :class="{ on: filter === f.id }" @click="setFilter(f.id)">{{ f.label }}</button>
          </div>
          <button
            v-for="p in visible" :key="p.i" class="prow" :class="{ on: p.i === current.i, ph: p.ph }"
            @mouseenter="hover(p.i)" @click="click(p.i)"
          >
            <span class="nm">{{ p.name }}</span><span class="ct">{{ p.cats.join(', ') }}</span>
            <span class="go"><AppIcon name="arrow" /></span>
          </button>
          <div class="pfmore">
            <span>{{ t('portfolio.showing', { n: visible.length }) }}</span>
            <a class="tlink" href="#contact">{{ t('portfolio.want') }}<AppIcon name="arrow" /></a>
          </div>
        </div>

        <div class="stage tilt" @click="modal = true">
          <div class="art" :class="swap % 2 ? 'b' : 'a'" :key="swap"><ProjectArt :kind="current.art" /></div>
          <div class="badges"><span v-for="c in current.cats" :key="c">{{ c }}</span></div>
          <div class="info">
            <div><h3>{{ current.name }}</h3><p>{{ current.desc }}</p></div>
            <span class="btn sm light view">{{ t('portfolio.caseStudy') }}<span class="dot"><AppIcon name="arrow" /></span></span>
          </div>
        </div>
      </div>
    </div>
    <Transition name="mod">
      <CaseStudyModal
        v-if="modal" :title="current.name" :desc="current.desc" :cats="current.cats" :stack="current.stack" :art="current.art"
        @close="modal = false"
      />
    </Transition>
  </section>
</template>
