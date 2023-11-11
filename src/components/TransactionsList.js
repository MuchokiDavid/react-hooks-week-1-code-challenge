import { useEffect, useState } from "react";
import React from 'react'

function TransactionsList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = '/api/db.json';
  
    useEffect(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data.transactions);
          setLoading(false);
          console.log(data)
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  return (
    <div>
        <table className="mt-8 table-auto border-collapse border border-slate-500 ... w-full">
            <th className="h-14 bg-green-600 border border-slate-600 ">Date</th>
            <th className="h-14 bg-green-600 border border-slate-600">Description</th>
            <th className="h-14 bg-green-600 border border-slate-600">Category</th>
            <th className="h-14 bg-green-600 border border-slate-600">Amount</th>
        {data.map(data => (
          <tr key={data.id}>
            <td className="border border-slate-700 ...">{data.date}</td>
            <td className="border border-slate-700 ...">{data.description}</td>
            <td className="border border-slate-700 ...">{data.category}</td>
            <td className="border border-slate-700 ...">{data.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default TransactionsList