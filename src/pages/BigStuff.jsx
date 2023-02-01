import React from 'react';
import Data from '../data';

function BigStuff(props) {
    // const bigStuffItems = Data.filter(item => item.typ === "BigStuff");
    const { data } = props;

    return (
        <section className='bigStuffSection'>

            {data.map((item, key) => (
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