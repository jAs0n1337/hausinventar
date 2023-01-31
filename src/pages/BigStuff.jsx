import React from 'react';
import Data from '../data';

function BigStuff() {
    const bigStuffItems = Data.filter(item => item.typ === "BigStuff");

    return (
        <section className='bigStuffSection'>

            {bigStuffItems.map((item, key) => (
                <div key={key} className='bigStuffDiv'>
                    <img className='bigStuffImg' src={item.img} alt={item.name} />
                    <div className='bigStuffText'>
                        <h2 className='bigStuffHeading'>{item.name}</h2>
                        <p className='bigStuffRoom'>{item.room}</p>
                        <p className='bigStuffDescription'>{item.description}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default BigStuff