import { z } from '@hono/zod-openapi';

export const ParamSchema = z.object({
  id: z.string().min(1).max(8).openapi({
    param: {
      name: "id",
      in: "path"
    },
    example: "123"
  })
})

export const UserSchema = z
  .object({
    id: z.string().openapi({
      example: '123',
    }),
    name: z.string().openapi({
      example: 'John Doe',
    }),
    age: z.number().openapi({
      example: 42,
    }),
  })
  .openapi('User')
