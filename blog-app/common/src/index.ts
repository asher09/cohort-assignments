import z from 'zod'

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional()
})
export type SignupInput = z.infer<typeof signupInput>


export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(8)
})
export type SigninInput = z.infer<typeof signinInput>


export const createblogInput = z.object({
    title: z.string(),
    content: z.string()
})
export type CreateblogInput = z.infer<typeof createblogInput>


export const updateblogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.number()
})  
export type UpdateblogInput = z.infer<typeof updateblogInput>