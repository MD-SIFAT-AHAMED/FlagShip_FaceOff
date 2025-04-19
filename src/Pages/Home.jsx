import React, { useState } from 'react';
import Hero from '../Components/Hero';
import PhoneContainer from '../Components/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data)
    const [phone,setPhone] = useState(data);

    const handlerSearch =(e,text)=>{
        e.preventDefault();
        if(text === '') return setPhone(data);
        console.log(text)
        const searchProduct = data.filter(
            (items)=>
            items?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            items.brand?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone?.model?.toLowerCase().split(' ').includes(text.toLowerCase())
        )
        setPhone(searchProduct);
    }
    return (
        <div>
            <Hero handlerSearch={handlerSearch}/>
            <PhoneContainer phone={phone}/>
        </div>
    );
};

export default Home;