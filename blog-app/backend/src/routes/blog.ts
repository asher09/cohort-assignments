import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import {verify} from 'hono/jwt'
import {createblogInput, updateblogInput} from "@asher02/blog-app-common";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }, 
  Variables: {
    userId: any
  }
}>()


blogRouter.use('/*', async (c, next) => {
  const header = c.req.header('Authorization') || "";
  try {
    // const token = header
    const response = await verify(header, c.env.JWT_SECRET)
    if(!response) {  
      c.status(403);
      return c.json({error : "Unauthorized"})
    }   
    c.set("userId", response.id);
    await next()
  } catch (error) {
    c.status(403);
    return c.json("You are not logged in")
  }
})


blogRouter.post('/', async (c) => {
  const body = await c.req.json();
    const {success }= createblogInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({message: "Inputs not correct"})
    }
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: authorId
    }
  })

  return c.json({blogId: blog.id})
})

blogRouter.put('/', async (c) => {
  const body = await c.req.json();
    const {success }= updateblogInput.safeParse(body);
    if(!success) {
      c.status(411);
      return c.json({message: "Inputs not correct"})
    }
  const userId = c.get('userId')
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blog = await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId

    }, 
    data: {
      title: body.title,
      content: body.content
    }
  })

  return c.json({id: blog.id})
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const  blogs = await prisma.post.findMany({
      select:{
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json(blogs)
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const blog = await prisma.post.findUnique({
        where: {
            id: id
        }, select: {
            title: true,
            content: true,
            author: {
              select: {
                name: true
              }
            }
        }
    })
    return c.json(blog)
})
