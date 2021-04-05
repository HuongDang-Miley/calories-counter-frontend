import React, { useState, useRef } from 'react'

export default function Test2() {
    const [food, setFood] = useState('food')
    const [cal, setCal] = useState('cal')

    const nameRef = useRef()
    const calRef = useRef()

    const handleSubmit = (name, cal) => {
        setFood(name)
        setCal(cal)
    }

    return (
        <div>
            <table>
                <tr>
                    <th>{food}</th>
                    <th>{cal}</th>
                </tr>
                <tr>
                    <td>  <input ref={nameRef}></input></td>
                    <td> <input ref={calRef}></input></td>
                    <td>  <button
                        onClick={() => handleSubmit(nameRef.current.value, calRef.current.value)}
                    >Add</button></td>
                </tr>
            </table>
        </div>
    )
}
