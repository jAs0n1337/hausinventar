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
            <button className={`AddSomething addSomethingButton ${addButton ? "hideForm" : ""}`} onClick={toggleButton} >Add Something</button>
            <div className={`AddSomething ${addButton ? "showForm" : "hideForm"}`}>
                <form>
                    <fieldset>
                        <legend>
                            <button className='formClose'>❌</button>
                        </legend>
                        <input type="text" placeholder='TITEL'></input>
                        <input type="text" placeholder='ROOM'></input>
                        <textarea placeholder='ADD TEXT'></textarea>
                        <button className='formButton'>Publish</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default AddSomething