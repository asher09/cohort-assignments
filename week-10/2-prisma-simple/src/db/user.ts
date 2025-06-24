import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const user  = await prisma.user.create({
        data: {
            username,
            password,
            name
        }
    })
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        password: user.password
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    if(!user) {
        throw new Error(`User with id ${userId} not found`);
    }
    return {
        id: user.id,
        username: user.username,
        password: user.password,
        name: user.name
    }
}
