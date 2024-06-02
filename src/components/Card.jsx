import React from 'react'

const Card = ({ children, bg = 'bg-gray-100'}) => {
    return (
        <>
            <div className={`${bg} flex-col items-center text-center rounded-lg p-4 m-4 
            hover:bg-black 
            hover:scale-110
            hover:text-white`}>
                {children}
            </div>
        </>
    )
}

export default Card
