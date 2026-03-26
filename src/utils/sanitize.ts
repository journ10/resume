/**
 * Strip HTML tags from a string to prevent XSS.
 * Removes all '<' characters so no tag or partial tag can survive
 * (the remaining '>' characters are harmless as plain text).
 * If the input is not a string, return it as-is.
 */
export function stripHtml(value: unknown): unknown {
  if (typeof value === 'string') {
    return value.replace(/</g, '')
  }
  return value
}

/**
 * Validate a URL - only allow http:, https:, and mailto: protocols.
 * Returns empty string if the URL uses a dangerous protocol (javascript:, data:, etc.)
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') return ''
  const trimmed = url.trim()
  if (/^(https?:|mailto:)/i.test(trimmed)) return trimmed
  if (/^\/\//.test(trimmed)) return '' // block protocol-relative URLs
  if (!/^[a-z]+:/i.test(trimmed)) return trimmed // relative URLs are safe
  return '' // block javascript:, data:, vbscript:, etc.
}

/**
 * Deep-sanitize an object: recursively strip HTML tags from all string values.
 * Sanitize any values that look like URLs (keys ending with 'url', 'href', 'link', 'github', 'demo', 'linkedin', 'twitter', 'weibo', 'weixin').
 */
const URL_KEYS = new Set(['github', 'linkedin', 'twitter', 'weibo', 'weixin', 'demo', 'href', 'url', 'link'])

export function sanitizeResumeData<T>(data: T): T {
  if (data === null || data === undefined) return data
  if (typeof data === 'string') {
    return data.replace(/</g, '') as unknown as T
  }
  if (Array.isArray(data)) {
    return data.map(item => sanitizeResumeData(item)) as unknown as T
  }
  if (typeof data === 'object') {
    const result: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      if (typeof value === 'string' && URL_KEYS.has(key.toLowerCase())) {
        result[key] = sanitizeUrl(value.replace(/</g, ''))
      } else {
        result[key] = sanitizeResumeData(value)
      }
    }
    return result as T
  }
  return data
}
