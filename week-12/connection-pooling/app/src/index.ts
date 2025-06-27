import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const app = new Hono()

// Test the DB connection by executing a simple SELECT
app.get('/', async (c) => {
  const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)
  const prisma = new PrismaClient({
    datasourceUrl: DATABASE_URL,
  }).$extends(withAccelerate())

  await prisma.$connect()
  const testResult = await prisma.$queryRaw`SELECT 1 as "success"`

  return c.json({
    message: 'Connection successful',
    testResult,
  })
})

export default {
  fetch: (request, env, ctx) => app.fetch(request, env, ctx),
}