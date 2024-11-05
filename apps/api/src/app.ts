import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'

import apiRoutes from './routes/api/index.route.ts'
import healthcheck from './routes/healthcheck.route.ts'

const app = new Hono()
  .use(logger())
  .use('/assets/*', serveStatic({ root: './build/client' }))
  .use('/favicon.ico', serveStatic({ path: './build/client/favicon.ico' }))
  .get('/', serveStatic({ path: './build/client/index.html' }))

const routes = [healthcheck, apiRoutes] as const

routes.forEach((route) => {
  app.route('/', route)
})

export type AppType = (typeof routes)[number]

export default app
