import React from 'react';
import Button from '../Ui/Button';

const PhoneCard = ({phone}) => {
    const {image,name,description}=phone;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Button label='Details'></Button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PhoneCard;