import React,{useRef} from 'react'

export default function Meals(props) {
console.log(props)

const mealRef = useRef();
const calorieRef = useRef();
const handleMeal=(m,c)=>{
    console.log(m,c);
    
}
    return (
        <div>
         <p>Meals</p>
         <input placeholder='meals' ref={mealRef}></input>
         <input placeholder='calories' ref={calorieRef}></input>
         <button onClick={()=>handleMeal(mealRef.current.value, calorieRef.current.value)}   >submit </button>

        </div>
    )
}
