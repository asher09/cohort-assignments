"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
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
