import { useState, useEffect } from "react";
import React from 'react'
import Form from './Form';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      // Fetch data from the JSON server API
      fetch('https://react-hooks-code-challenge-server.onrender.com/transactions')
        .then(response => response.json())
        .then(data => setTransactions(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div>
        <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        name="search"
        className="mt-4 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  
        />
        <Form/>
        <table className="mt-8 table-auto border-collapse border border-slate-500 ... w-full">
        <thead>
          <tr>
            <th className="h-14 bg-green3-600 border border-slate-600 ">Date</th>
            <th className="h-14 bg-green-600 border border-slate-600 ">Description</th>
            <th className="h-14 bg-green-600 border border-slate-600 ">Category</th>
            <th className="h-14 bg-green-600 border border-slate-600 ">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
            <td className="border border-slate-600 ...">{transaction.date}</td>
            <td className="border border-slate-600 ...">{transaction.description}</td>
            <td className="border border-slate-600 ...">{transaction.category}</td>
            <td className="border border-slate-600 ...">{transaction.amount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Search