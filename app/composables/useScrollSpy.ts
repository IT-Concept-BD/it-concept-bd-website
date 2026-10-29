// Tracks which section sits in the middle of the viewport, for the nav highlight.
export function useScrollSpy(ids: string[]) {
  const active = ref(ids[0] ?? 'hero')
  onMounted(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) active.value = window.scrollY < 60 ? ids[0]! : e.target.id
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    onBeforeUnmount(() => io.disconnect())
  })
  return active
}
