import { PORT } from '@repo/constants'

export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  if (import.meta.env.VITE_VERCEL_URL) {
    return `https://${import.meta.env.VITE_VERCEL_URL}`
  }

  return `http://localhost:${PORT}}`
}
