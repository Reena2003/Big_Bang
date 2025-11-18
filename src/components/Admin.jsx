import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Admin = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "contactMessages"));

    const fields = [];
    querySnapshot.forEach((doc) => {
      fields.push({ id: doc.id, ...doc.data() });
    });

    setData(fields);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#1e292d] p-10 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">
        📋 Student Enquiry Dashboard
      </h1>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="w-full text-left bg-[#2f3b41] rounded-lg">
          <thead className="bg-[#445157]">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Message</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-5 text-gray-300">
                  No submissions yet...
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="border-b border-gray-600">
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.phone}</td>
                  <td className="py-3 px-4">{item.city}</td>
                  <td className="py-3 px-4">{item.message}</td>
                  <td className="py-3 px-4">
                    {item.createdAt?.toDate?.().toLocaleString() ||
                      "No Date"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
