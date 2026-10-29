// Highlights the last section whose top has passed 40% of the viewport height.
// Position based (not observer based) so fast jumps from the nav can never skip a section.
export function useScrollSpy(ids: string[]) {
  const active = ref(ids[0] ?? 'hero')
  onMounted(() => {
    let raf = 0
    const update = () => {
      raf = 0
      if (window.scrollY < 60) { active.value = ids[0]!; return }
      const line = window.innerHeight * 0.4
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      let current = ids[0]!
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      active.value = atBottom ? ids[ids.length - 1]! : current
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    })
  })
  return active
}
