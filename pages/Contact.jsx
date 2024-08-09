import React from 'react';
import Head from "next/head";

const Contact = () => {
  return (
    <>
     <Head>
        <title>ZenZone | Contact</title>
        <meta name="description" content="This is E-Commerce WebSite like ZenZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='flex flex-col items-center  min-h-screen p-6 bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Contact Us</h1>
        <form className='space-y-4'>
          <div>
            <label htmlFor="name" className='block text-gray-700 font-medium'>Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder='Enter your name' 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
            />
          </div>
          <div>
            <label htmlFor="email" className='block text-gray-700 font-medium'>Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Enter your email' 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
            />
          </div>
          <div>
            <label htmlFor="password" className='block text-gray-700 font-medium'>Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Enter your password' 
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2' 
            />
          </div>
          <button 
            type="submit" 
            className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
