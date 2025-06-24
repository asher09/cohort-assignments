import { client } from "..";
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
    const insertquery = `
        INSERT INTO todos(user_id, title, description, done)
        VALUES ($1, $2, $3, $4) 
        RETURNING *;
    `;

    const result = await client.query(insertquery, [userId, title, description, false]);

    const todo = result.rows[0];
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
    const updateQuery = `
        UPDATE todos
        SET done = true
        WHERE id = $1
        RETURNING *;
    `;

    const result = await client.query(updateQuery, [todoId]);

    if (result.rows.length === 0) {
        throw new Error(`Todo with id ${todoId} not found`);
    }

    const todo = result.rows[0];
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
    const selectQuery = `
        SELECT * FROM todos
        WHERE user_id = $1
        ORDER BY id DESC;
    `;

    const result = await client.query(selectQuery, [userId]);

    return result.rows.map(todo => ({
        id: todo.id,
        title: todo.title,
        description: todo.description,
        done: todo.done,
        user_id: todo.user_id
    }));
}