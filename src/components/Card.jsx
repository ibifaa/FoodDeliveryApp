import React from 'react'
import food from "../assets/png/food.png"

function Card({img, price, name}) {
  return (
    <div className='shadow w-[200px] p-5 rounded-[30px] shadow-lg'>
      <div className="imageSection"><img src={food} alt="food" /></div>
        <div className="priceSection">
        <p>Great Paster</p>
        <div className='flex flex-row justify-between items-center'>
            <p>$6.55</p>
            <button className='bg-[red] text-white py-1 px-5 rounded-xl leading-[19.36px] text-[16px]'>Order</button>
        </div>
        </div>
    </div>
  )
}

export default Card
