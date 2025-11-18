import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number");
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Phone number must be 10 digits");
    return;
  }

  if (!city.trim()) {
    alert("Please enter your city");
    return;
  }










    try {
      await addDoc(collection(db, "contactMessages"), {
        name: name,
        phone: phone,
        city: city,
        message: message,
        createdAt: new Date(),
      });

      alert("Message sent successfully!");

      setName("");
      setPhone("");
      setCity("");
      setMessage("");

    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <section id="Contact" className="w-full h-[400px] bg-[#28373d] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[80%] md:w-[50%] mx-auto">
        <input
          className="bg-[#3f4c52] outline-0 px-5 py-2 text-xl rounded text-white"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white"
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white"
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <textarea
          className="bg-[#3f4c52] outline-0 px-5 py-3 text-xl rounded text-white"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <div className="flex justify-center">
          <button
            className="bg-amber-400 text-black cursor-pointer text-[16px] items-center rounded w-[100px] px-4 py-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;





// import React from 'react'

// const Contact = () => {
//   return (
//     <div className='w-full h-[400px] bg-[#28373d] flex justify-center items-center'>
//         <form className='flex flex-col gap-5 ' >
//             <input className='bg-[#3f4c52] w-[600px] outline-0 px-5 py-2 text-xl rounded text-white' type="text" placeholder=' Enter your name' />
//             <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your phone' />
//             <input  className='bg-[#3f4c52] px-5 py-3 outline-0 text-xl rounded text-white' type="text" placeholder='Enter your City' />
//             <textarea  className='bg-[#3f4c52]  outline-0 px-5 py-3 text-xl rounded text-white' placeholder='Message'></textarea>

//             <div className='flex justify-center'>
//             <button className='bg-amber-400 text-black cursor-pointer text-[16px] items-center rounded w-[100px] px-4 py-3' type='submit'>Submit</button>
//             </div>



//         </form>
    
//     </div>
//   )
// }

// export default Contact
