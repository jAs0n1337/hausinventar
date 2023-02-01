import React, { useState } from 'react'
import './AddSomething.css'

const AddSomething = () => {
    const [addButton, setAddButton] = useState(false);
    // console.log(addButton)

    const toggleButton = () => {
        setAddButton(prev => !prev);
    };

    return (
        /*
        Ternary Operator verändert den state (addButton) und zeigt anhand true oder false das Formlar an.
        Der Add Something Button wir ausgeblendet und das Formular erscheint.
        Nach klick auf Publish verschwindet das Formular und der Button erscheint wieder
        */
        <div className='div'>
            <button className={`AddSomething addSomethingButton ${addButton ? "hideForm" : ""}`} onClick={toggleButton} >Add Something</button>
            <div className={`AddSomething ${addButton ? "showForm" : "hideForm"}`}>
                <form>
                    <fieldset className='fieldset'>
                        <legend className='formClose'>
                            <button>❌</button>
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