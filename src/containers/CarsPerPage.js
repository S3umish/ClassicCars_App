import React, {useState, useEffect } from 'react'
import Cars from './Cars' 
import axios from 'axios'
import Pagination from '../components/Pagination'

const CarsPerPage = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [carsPerPage] = useState(4)

    useEffect(()=> {
        const fetchCars = async () => {
            setLoading(true)
            const res = await axios.get("http://localhost:3001/cars")
            setCars(res.data)
            setLoading(false)
        }
        fetchCars()
    }, []);

    // get current Cars

    const indexOfLastCar = currentPage * carsPerPage
    const indexOfFirstCar = indexOfLastCar - carsPerPage
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar)

    //change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    

    return (
        <div className="container mt-5">
            <h1 className="text-primary mb-3">My Cars</h1>
            <Cars cars={currentCars} loading={loading} />  
            <Pagination 
            carsPerPage={carsPerPage} 
            totalCars={cars.length}
                paginate={paginate}
            />
        </div>
    )

}

export default CarsPerPage