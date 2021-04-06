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



            ======================================= Display Meal Type =======================================
            <div>
                {showEdit
                    ? <span>
                        <input placeholder={props.item.type} ref={foodRef}></input>
                        <span> cal </span>
                        <button onClick={() => {
                            props.editMeal(props.item.id, foodRef.current.value)
                            setShowEdit(!showEdit)
                        }}>Save</button>
                    </span>
                    : <span>
                        <span>{props.item.type}</span>
                        <span> cal </span>
                        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
                    </span>
                }
                <button onClick={() => props.deleteMeal(props.item.id)}>Delete</button>
            </div>

            {/* ======================================= Display Food List ======================================= */}
            {props.item.food.map(item => (
                // <div key={item.id}>
                <FoodCard
                    key={item.id}
                    mealId={props.item.id}
                    item={item}
                    deleteFood={props.deleteFood}
                    editFood={props.editFood}
                />
                // </div>
            ))}
            {/* ======================================= Display Add New Food Section ======================================= */}
            <div className='addfood-wrapper'>
                <form className='add-food'
                    onChange={() => handleInputChange(foodRef.current.value, calRef.current.value)}
                    onSubmit={handleSubmitFood}
                >
                    {/* <input className='food-input' type='text' ref={foodRef}></input>
                    <input className='cal-input' type='number' ref={calRef}></input>
                    <button className='add-btn'>+</button> */}
                </form>

            </div>

            {/* ======================================= Display Total Calories ======================================= */}
            {props.item.food.length === 0
                ? <p>Total: 0</p>
                : <p>Total: {props.item.food.map(item => Number(item.cal)).reduce((sum, item) => sum += item)}</p>
            }
