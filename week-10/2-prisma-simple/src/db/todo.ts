import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const todo = await prisma.todo.create({
        data: {
            userId,
            title,
            description,
            done: false
        }
    });

    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        done: todo.done
    };
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const todo = await prisma.todo.update({
        where: {
            id: todoId
        },
        data: {
            done: true
        }
    });

    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        done: todo.done
    };
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            id: 'desc'
        }
    });

    return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        userId: todo.userId,
        description: todo.description,
        done: todo.done
    }));
}