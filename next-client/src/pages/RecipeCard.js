import React from 'react'
import Link from 'next/link';
const RecipeCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
        <div>
            <img src={props.img} alt="img"/>
        </div>
        <div>
          <div>
            <h3>{props.title}</h3>
            <h3>{props.value}</h3>
          </div>
          <div>
          <button>Details</button>

            
          </div>
        </div>

    </div>
  )
}

export default RecipeCard