import Image from "next/image";
import axios from 'axios';

 async function fetchData() {
  await new Promise((r) => setTimeout(r, 5000))
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data[0];
  }

export default async function Home() {
 const details = await fetchData();


  return (
      <div className="flex flex-col justify-center h-screen bg-amber-50">
        <div className="flex justify-center " >
          <div className="shadow-xl p-15 bg-amber-100 rounded">
            <div>
              {details.name}
            </div>
            {details.email}

          </div>
        </div>     
      </div>
  )
}
