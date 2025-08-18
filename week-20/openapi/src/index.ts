const app = new OpenAPIHono();
import { createRoute } from '@hono/zod-openapi'
import { OpenAPIHono } from '@hono/zod-openapi'
import {UserSchema} from './input';
import {ParamSchema} from './input';
import {swaggerUI} from '@hono/swagger-ui'

const getUserRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Get the user details',
    },
  },
})

const postUserRoute = createRoute({
  method: 'post',
  path: '/users/{id}',
  request: {
    params: ParamSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Get the user details',
    },
  },
})

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})
app.openapi(postUserRoute, (c) => {
  const { id } = c.req.valid('param')
  return c.json({
    id,
    age: 20,
    name: 'Ultra-man',
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})


app.get('/ui', swaggerUI({ url: '/doc' }))

export default app