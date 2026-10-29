<script setup lang="ts">
// 3D tilt on any `.tilt` element (the portfolio preview). Renders nothing; pointer devices only.
onMounted(() => {
  let last: HTMLElement | null = null
  const reset = () => {
    if (!last) return
    last.style.setProperty('--rx', '0deg'); last.style.setProperty('--ry', '0deg'); last = null
  }
  const move = (e: MouseEvent) => {
    const tl = e.target instanceof Element ? e.target.closest<HTMLElement>('.tilt') : null
    if (!tl) return reset()
    const r = tl.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
    tl.style.setProperty('--rx', ((0.5 - py) * 7).toFixed(2) + 'deg')
    tl.style.setProperty('--ry', ((px - 0.5) * 9).toFixed(2) + 'deg')
    tl.style.setProperty('--gx', (px * 100).toFixed(0) + '%')
    tl.style.setProperty('--gy', (py * 100).toFixed(0) + '%')
    last = tl
  }
  document.addEventListener('mousemove', move)
  onBeforeUnmount(() => document.removeEventListener('mousemove', move))
})
</script>

<template><span hidden /></template>
