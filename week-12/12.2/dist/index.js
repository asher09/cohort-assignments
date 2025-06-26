"use strict";
;
function sumOfage(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfage({ name: 'Tate', age: 13 }, { name: 'Speed', age: 33 });
console.log(age);
