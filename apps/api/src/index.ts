import { PORT } from '@repo/constants'
import app from './app.ts'

// eslint-disable-next-line no-console
console.log(`Server listening at http://localhost:${PORT}`)

Bun.serve({ fetch: app.fetch, port: PORT })
