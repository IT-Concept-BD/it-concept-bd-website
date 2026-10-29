// Eased 0 -> 1 progress used by every animated counter.
export function useCountUp(duration = 1900) {
  const p = ref(0)
  let started = false
  const start = (delay = 0) => {
    if (started) return
    started = true
    setTimeout(() => {
      const t0 = performance.now()
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / duration)
        p.value = 1 - Math.pow(1 - k, 3)
        if (k < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, delay)
  }
  return { p, start }
}

// Starts a counter once its element is mostly visible; falls back to starting at once.
export function useCountOnView(target: Ref<HTMLElement | null>, duration = 1900) {
  const { p, start } = useCountUp(duration)
  onMounted(() => {
    if (!target.value || typeof IntersectionObserver === 'undefined') return start()
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { start(); io.disconnect() }
    }, { threshold: 0.6, rootMargin: '0px 0px -10% 0px' })
    io.observe(target.value)
    onBeforeUnmount(() => io.disconnect())
  })
  return p
}
