import React, { useEffect, useState } from "react";
import axios from "axios";


const ViewAllCars = () => {
    const[data,changeData]= useState([])

    const fetchdata = () => {
        axios.get("https://host-demo-app.onrender.com/api/cars").then(
    (response) => {
        changeData(response.data)
    }
).catch()
    }

    useEffect(
        ()=>{
            fetchdata()
        }
    )
       
    return (
        <div>
          
            <div className="container mt-4">
                <div className="row g-4">
                    {data.map(
                        (value,index)=>
                        {return(
                            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Car-Rental-App</h5>
                                <p><b>:</b>{value.course_name}</p>
                                <p><b>ID</b>{value.id}</p>
                                <p><b>Registration_number:</b>{value.registration_number}</p>
                                <p><b>Brand:</b>{value.brand}</p>
                                <p><b>Model:</b>{value.model}</p>
                                <p><b>Vehicle_type:</b>{value.vehicle_type}</p>
                                <p><b>Fuel_type:</b>{value.fuel_type}</p>
                                <p><b>Transmission:</b>{value.transmission}</p>
                                <p><b>seating_capacity:</b>{value.seating_capacity}</p>
                                <p><b>Rent_per_day:</b>{value.rent_per_day}</p>
                                <p><b>city:</b>{value.city}</p>
                                <p><b>Availability_status:</b>{value.availability_status}</p>
                                <p><b>Created_at:</b>{value.created_at}</p>

                            </div>
                        </div>
                    </div>
                        )}
                    )}

                </div>
            </div>
        </div>
    );
};

export default ViewAllCars