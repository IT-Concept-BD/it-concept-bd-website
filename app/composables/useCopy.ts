// Resolves a branch of the i18n messages (arrays and objects) into plain strings.
export function useCopy() {
  const { tm, rt } = useI18n()
  const walk = (v: any): any => {
    if (typeof v === 'string' || typeof v === 'function') return rt(v)
    if (Array.isArray(v)) return v.map(walk)
    if (v && typeof v === 'object') {
      if ('type' in v && ('loc' in v || 'body' in v || 'static' in v)) return rt(v)
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]))
    }
    return v
  }
  return (key: string) => walk(tm(key)) as any
}
