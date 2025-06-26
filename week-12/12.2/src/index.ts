import { z } from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type updatedProfileSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  
  const updateBody: updatedProfileSchema = req.body; 

  if (!success) {
    res.status(411).json({});
    return
  }
  res.json({
    message: "User updated"
  })
});

app.listen(3000);



// interface User {
//   id: string;
//   name: string;
// }

// const usersMap = new Map<string, User>();

// usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
// usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }










// interface User {
//     name: string,
//     age: number
// };

// function sumOfage(user1: User, user2: User) {
//     return user1.age + user2.age;
// }

// const age = sumOfage({name: 'Tate', age: 13}, {name: 'Speed', age: 33});
// console.log(age);