import { React, useState } from 'react';

const Test = () => {
  
const [counter, setCounter] = useState(0);

function AddCounter(){
  setCounter(counter + 1 );
}

function RemoveCounter(){
  setCounter(counter - 1);
}

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-center mt-28'>Test Page</h1>
      <h1 className='text-3xl font-bold text-center mt-28'>{counter}</h1>
   <div className='flex gap-6'>
   <button onClick={AddCounter} className='text-xl  p-4 mb-28 font-bold items-center justify-center bg-violet-700 text-white mt-8' type="submit ">Add</button>
      <button onClick={RemoveCounter} className='text-xl  p-4 mb-28 font-bold items-center justify-center bg-violet-700 text-white mt-8' type="submit ">Remove</button>
     
    </div>
    </div>
  );
};

export default Test;