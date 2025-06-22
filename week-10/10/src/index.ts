import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
      email, 
      password,
      firstName,
      lastName
    }
  })
  console.log(res)
}

insertUser("admin1", "123456", "harkirat", "singh")












// import {Client} from 'pg'

// const client = new Client({
//    connectionString: 'postgresql://demo_owner:Lyx0TMsZR9nO@ep-plain-brook-a5ublt66-pooler.us-east-2.aws.neon.tech/demo?sslmode=require'

// })
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//             CREATE TABLE IF NOT EXISTS users (
//                 id SERIAL PRIMARY KEY,
//                 name VARCHAR(100) NOT NULL,
//                 email VARCHAR(100) UNIQUE NOT NULL
//             );
//         `);
//         console.log(result);
// }
// createUsersTable();

// async function insertData(name: string, email: string) {
//   try {
//     await client.connect(); // Ensure client connection is established
//     // Use parameterized query to prevent SQL injection
//     const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//     const values = [name, email];
//     const res = await client.query(insertQuery, values);
//     console.log('Insertion success:', res); // Output insertion result
//   } catch (err) {
//     console.error('Error during the insertion:', err);
//   } finally {
//     await client.end(); // Close the client connection
//   }
// }

// // Example usage
// insertData('username5', 'user5@example.com').catch(console.error);
