import React from 'react'

const Cars = ({cars, loading }) => {

    if (loading){
        return <h2>Loading...</h2>
    }
    return (
        <ul className="list-group mb-4">
            {cars.map(car => (
                <li key=
                {car.id} className ='list-group-item'>
                {car.title}    
                </li>

            ))}
            
        </ul>
    )
}

export default Cars
