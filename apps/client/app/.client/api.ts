import type { AppType } from '@repo/apps-api/src/app'
import { hc } from 'hono/client'

export const client = hc<AppType>('/')
