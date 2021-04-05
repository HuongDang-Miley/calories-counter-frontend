import React, { useState, useRef } from 'react'

export default function Test(props) {

    const [name, setName] = useState('')
    const [cal, setCal] = useState('')
    const [food, setFood] = useState('food')

    const handleData = (event) => {
        event.preventDefault();
        if (!name || !cal) {
            alert('fuck you')
        } else {
            setFood(`This is ${name} and ${cal}`)
            props.addFood(food, cal)
            console.log(food, cal)
        }
    }

    const handleChangeData = (name, cal) => {
        setName(name)
        setCal(cal)
    }

    const nameRef = useRef()
    const calRef = useRef()

    return (
        <div>
            <h1>{food}</h1>
            <form
                onChange={() => handleChangeData(nameRef.current.value, calRef.current.value)}
                onSubmit={handleData}
            >
                <input ref={nameRef}></input>
                <input ref={calRef}></input>
                {/* <input type="submit" value="Submit"></input> */}
                {/* <button onClick={() => handleData(nameRef.current.value, calRef.current.value)}>Save</button> */}
                <button>Save</button>
            </form>
        </div>
    )

}


     {/* <div>
                <input placeholder='type food' ref={foodRef}></input>
                <input placeholder='type cal' type="number" ref={calRef}></input>
                <button onClick={() => props.addFood(props.item.id, foodRef.current.value, calRef.current.value)}>Save</button>
            </div> */}