import { Hono } from 'hono'

const app = new Hono({ strict: false }).get('/healthcheck', (c) => {
  return c.json({ status: 'ok' })
})

export default app
