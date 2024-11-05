import { Hono } from 'hono'

const app = new Hono({ strict: false }).basePath('/api').get('/', (c) => {
  return c.json({ hello: 'api' })
})

export default app
