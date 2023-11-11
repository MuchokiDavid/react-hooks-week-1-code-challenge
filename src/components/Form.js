import React from 'react'
import {useState, useEffect} from "react";
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";

function Form() {
  const [date, setDate] = useState(new Date());

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
        setData(data);
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
      <form>
        <div className='grid-rows-2	'>
          <div className='columns-4 mt-5'>
            <div>
            <DatePicker placeholderText='MM/DD/YYYY' selected={(date)} onChange={(date) => setDate(date)} className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
            </div>
            <div>
              <input 
                type='text'
                id='description'
                name='description'
                className="mt-4 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='Description'
              />
            </div>
            <div>
            <input 
              type='text'
              id='category'
              name='category'
              className="mt-4 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Category'
            />
            </div>
            <div>
            <input 
              type='number'
              id='amount'
              name='amount'
              className="mt-4 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Amount'
            />
            </div>
          </div>
          <div className='columns-1 mt-4'>
            <button type='submit' className='rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Add Transaction</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form