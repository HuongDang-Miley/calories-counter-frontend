import React, { useRef, useState } from 'react'
import './foodcard.css'


export default function FoodCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    let nameRef = useRef()
    let calRef = useRef()

    const [disableSaveButton, setDisableSaveButton] = useState(false)

    const handleInputChange = (nameRef, calRef) => {
        console.log(nameRef, calRef)
        if (!nameRef || !calRef) {
            setDisableSaveButton(true)
        } else {
            setDisableSaveButton(false)
        }
    }

    return (
        <div className='foodcard-wrapper'>
            {/* Toggle Edit button, if click Edit, show input field and SAVE button. If click SAVE button, Edit will shop up again*/}
            {showEdit
                ? <form className='food-row'
                    onChange={() => handleInputChange(nameRef.current.value, calRef.current.value)}
                    onSubmit={() => {
                        props.editFood(props.mealId, props.item.id, nameRef.current.value, calRef.current.value)
                        setShowEdit(!showEdit)
                    }}
                >
                    <input className='food-cell' defaultValue={props.item.name} type='text' ref={nameRef}></input>
                    <input className='cal-cell' defaultValue={props.item.cal} type='number' ref={calRef}></input>
                    <button
                        disabled={disableSaveButton}
                        className={disableSaveButton ? 'disable save-btn' : 'enable save-btn'}
                    >√</button>
                </form>
                : <div className='food-row'>
                    <span className='food-span'>{props.item.name}</span>
                    <span className='cal-span'>{props.item.cal}</span>
                    <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
                </div>
            }

            <button className='delete-btn' onClick={() => {
                props.deleteFood(props.mealId, props.item.id)
                setShowEdit(!showEdit)
            }}>Delete</button>

        </div>
    )
}
