import React from 'react';
import Data from '../data';

function NotSoBig() {
    const notSoBigStuffItems = Data.filter(item => item.typ === "NotSoBigStuff");

    return (
        <section className='notSoBigStuffSection'>

            {notSoBigStuffItems.map((item, key) => (
                <div key={key} className='notSoBigStuffDiv'>
                    <img className='notSoBigStuffImg' src={item.img} alt={item.name} />
                    <div className='notSoBigStuffText'>
                        <h2 className='notSoBigStuffHeading'>{item.name}</h2>
                        <p className='notSoBigStuffRoom'>{item.room}</p>
                        <p className='notSoBigStuffDescription'>{item.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default NotSoBig