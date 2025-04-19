import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import Button from '../Ui/Button';

const PhoneContainer = ({phone}) => {
    const [displayData,setDisplayData] = useState([]);
    const [showAll,setShowAll] = useState(false);

    useEffect(()=>{
        if(showAll)
        {
            setDisplayData(phone);
        }
        else
        {
            setDisplayData(phone.slice(0,6));
            window.to
        }
    },[showAll,phone])

    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10'>
                {
                    displayData.map(phone => <PhoneCard key={phone.id} phone={phone}/>)
                }
            </div>
            <div>
                <Button onClick={()=> {
                    setShowAll(!showAll)
                    if(showAll) window.scrollTo(0,399)
                    }} 
                    label={showAll ? 'Show less' : 'Show All'}/> 
            </div>
        </div>
    );
};

export default PhoneContainer;