import React from 'react'
import { useRef } from 'react';
import languages from '../Utils/language';
import { useSelector } from 'react-redux';

const GPTSearchView = () => {
    const lang = useSelector((store) => store.config.lang);
    const serachGPT=useRef(null);
  return (
    <div className="bg-black rounded-lg p-10 bg-opacity-70 w-5/6 max-w-[70%] ">
      <form action="" className="grid grid-cols-12 gap-4">
        <input
          className="px-4 text-black py-1 rounded-lg col-span-9 outline-none"
          type="text"
          placeholder={languages[lang].placeholder}
        
           
        />
        <button className="bg-btn-red p-2 col-span-3 hover:bg-opacity-75 uppercase  rounded-lg">
          {languages[lang].search}
        </button>
      </form>
    </div>
  );
}

export default GPTSearchView