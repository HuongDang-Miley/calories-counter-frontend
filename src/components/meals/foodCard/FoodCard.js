import React, { useRef, useState } from 'react'
import './foodcard.css'


export default function FoodCard(props) {
    const [showEdit, setShowEdit] = useState(false)
    let nameRef = useRef()
    let calRef = useRef()

    return (
        <tr>
            <td>{showEdit
                ? <input ref={nameRef} defaultValue={props.item.name}></input>
                : props.item.name}
            </td>

            <td>{showEdit
                ? <input ref={calRef} defaultValue={props.item.cal}></input>
                : props.item.cal}
            </td>

            <td> {showEdit
                ? <button onClick={() => {
                    props.editFood(props.mealId, props.item.id, nameRef.current.value, calRef.current.value)
                    setShowEdit(!showEdit)
                }}>Save</button>

                : <button onClick={() => {
                    console.log('click')
                    setShowEdit(!showEdit)
                }}>Edit</button>}
            </td>
            <td><button onClick={() => props.deleteFood(props.mealId, props.item.id)}>X</button></td>
        </tr>
    )
}
