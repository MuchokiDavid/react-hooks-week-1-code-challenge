import React from 'react'
import {useState, useEffect} from "react";
import 'react-datepicker/dist/react-datepicker.css'
// import DatePicker from "react-datepicker";

function Form() {
  const [date, setDate] = useState(new Date());
  //form data state

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] =useState({
      date: "",
      description: "",
      category: "",
      amount: 0
  })

  const handleOnChange = (event)=> {
    setFormData(
         {
             ...formData,
             [event.target.name]: event.target.value
         }
    )
 }

function handleSubmit(e){
  e.preventDefault()
  // console.log(formData)
  fetch("https://react-hooks-code-challenge-server.onrender.com/transactions",{
    method: "POST",    
        headers:{
            "Content-Type":"application/json"
            },                    
          body: JSON.stringify(formData)
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data=> {
          console.log(data)
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
        window.location.reload();
}

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='grid-rows-2	'>
          <div className='columns-4 mt-5'>
            <div>
            <input 
                type='date'
                id='date'
                name='date'
                onChange={handleOnChange}
                className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-4"
            />
            </div>
            <div>
              <input 
                type='text'
                id='description'
                name='description'
                onChange={handleOnChange}
                className="mt-4 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='Description'
              />
            </div>
            <div>
            <input 
              type='text'
              id='category'
              name='category'
              onChange={handleOnChange}
              className="mt-4 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder='Category'
            />
            </div>
            <div>
            <input 
              type='number'
              id='amount'
              name='amount'
              onChange={handleOnChange}
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