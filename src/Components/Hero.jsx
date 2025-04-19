import React, { useState } from 'react';
import bannerImg from '../assets/banner.png'
import Button from '../Ui/Button';
const Hero = ({handlerSearch}) => {

    const [searchText,setSearchText] = useState('') ;
    
    return (
        <div className='py-12'>
            <img src={bannerImg} className='mx-auto w-full md:max-w-md' alt="bannerImage" />
            <div className='text-center space-y-4'>
                <h1 className='font-thin text-4xl md:text-6xl '>Browse, Search, View, Buy</h1>
                <p className='text-gray-500'>
                    Best place to browse, search, view details and purchase of top
                    flagship phones <br /> of the current time - FlagshipFaceOff
                </p>
                <form 
                onSubmit={(e)=>{
                    handlerSearch(e,searchText)
                    // reset input field
                    setSearchText('')
                }}
                 className='flex flex-col md:flex-row justify-center'>

                    <input onChange={(e)=> setSearchText(e.target.value)} type="text" value={searchText} className='w-full md:w-2/3 h-12 px-3 mb-3 bg-white border border-gray-300 rounded shadow-md focus:outline-none focus:shadow-outline md:mr-2 md:mb-0' placeholder='Search by Name'/>
                    <Button type="submit" label="Search"/>
                </form>
            </div>
        </div>
    );
};

export default Hero;