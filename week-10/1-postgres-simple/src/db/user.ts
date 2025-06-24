import { client } from "..";

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
    const insertQuery = 
        `INSERT INTO users (username, password, name)
        VALUES ($1, $2, $3)
        RETURNING *; ` ;

    const result = await client.query(insertQuery, [username, password, name])
    const user = result.rows[0];

    return {
        id: user.id,
        username: user.username,
        password: user.password,
        name: user.name
    };
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
    const selectQuery = `
        SELECT * FROm users WHERE id = $1;
    `;
    const result = await client.query(selectQuery, [userId]);
    if(result.rows.length == 0) {
        throw new Error (`User with id ${userId} not found`);
    }
    const user = result.rows[0];
    return {
        id: user.id,
        username: user.username,
        password: user.password,
        name: user.name
    };
}
