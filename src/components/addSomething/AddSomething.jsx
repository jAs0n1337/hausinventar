import React, { useEffect, useState } from 'react'
import './AddSomething.css'

const AddSomething = () => {
    const [addButton, setAddButton] = useState(false);
    console.log(addButton)

    const toggleButton = () => {
        setAddButton(prev => !prev);
    };

    return (
        <div className='div'>
            <button className={`AddSomething ${addButton ? "hideForm" : "formForm"}`} onClick={toggleButton} >Add Something</button>
            <div className={`AddSomething ${addButton ? "showForm" : "hideForm"}`}>
                <form>
                    <input type="text" placeholder='TITEL'></input>
                    <input type="text" placeholder='ROOM'></input>
                    <textarea placeholder='ADD TEXT'></textarea>
                    <button>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default AddSomething