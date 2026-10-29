<script setup lang="ts">
defineProps<{ kind: string }>()
const { t } = useI18n()
</script>

<template>
  <div style="position: absolute; inset: 0; overflow: hidden">
    <div v-if="kind === 'web'" class="artr a-web"><div class="win"><div class="b"><i /><i /><i /></div><div class="h2b" /><div class="cols"><i /><i /><i /></div></div></div>
    <div v-else-if="kind === 'red'" class="artr a-red"><div class="bt">BSL</div><div class="c1" /><div class="c2" /></div>
    <div v-else-if="kind === 'dash'" class="artr a-dash">
      <div class="cc"><small class="small">{{ t('portfolio.art.today') }}</small><b>{{ t('portfolio.art.price') }}</b><div class="bars"><i style="height:40%" /><i style="height:65%" /><i style="height:50%" /><i style="height:85%" /><i style="height:60%" /><i style="height:100%" /></div><span class="sk" style="width:70%" /><span class="sk" style="width:45%" /></div>
    </div>
    <div v-else-if="kind === 'app'" class="artr a-app"><div class="pp"><i /><i /><i /><i /><i /></div></div>
    <div v-else-if="kind === 'brand'" class="artr a-brand">
      <span class="cr" style="left:12%;top:16%;width:190px;height:190px;background:#1a1a1b" /><span class="cr" style="left:40%;top:30%;width:190px;height:190px;background:#db2b2f" /><span class="cr" style="left:26%;top:58%;width:120px;height:120px;background:#fff" /><span class="cr" style="left:68%;top:12%;width:90px;height:90px;background:#3f403c" />
    </div>
    <div v-else class="artr a-cat"><div class="pg1" style="transform:rotate(-14deg) translateX(-70px)" /><div class="pg1" style="transform:rotate(9deg) translateX(60px);background:var(--red)" /><div class="pg1" style="transform:rotate(-2deg)" /></div>
  </div>
</template>
