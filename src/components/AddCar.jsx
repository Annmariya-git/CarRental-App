import axios from 'axios'
import React from 'react'
import { useState } from 'react'


const AddCar = () => {

const [input,changeInput] = useState({

    registration_number: "",  
    brand: "",  
    model: "",  
    vehicle_type: "",  
    fuel_type: "",  
    transmission: "",  
    seating_capacity: "",  
    rent_per_day: "",  
    city: "",  
    availability_status: ""
})

const inputHandler = (event)=>{

  changeInput({...input,[event.target.name]:event.target.value})
}
 const readvalue=()=>{

 console.log(input)
 axios.post("https://host-demo-app.onrender.com/api/add-car",input).then(

    (response)=>{

        console.log(response.data)
    }
 ).catch() 
 }

    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">registration_number</label>
                                <input type="text" className="form-control" name="registration_number" value={input.registration_number} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">brand</label>
                                <input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">model</label>
                                <input type="text" className="form-control" name="model" value={input.model} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">vehicle_type</label>
                                <select className="form-select" name="vehicle_type" value={input.vehicle_type} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value=" Hatchback "> Hatchback </option>
                                <option value="Sedan">Sedan</option>           
                                <option value="SUV">SUV</option>
                                <option value="MUV">MUV</option>           
                                <option value="Luxury">Luxury</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">fuel_type</label>
                                <select className="form-select" name="fuel_type" value={input.fuel_type} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>           
                                <option value="Electric">Electric</option>
                                <option value="Hybrid">Hybrid</option>           
                                <option value="CNG">CNG</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">transmission</label>
                                <select className="form-select" name="transmission" value={input.transmission} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Manual ">Manual </option>
                                <option value="Automatic">Automatic</option>           
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">seating_capacity</label>
                                <input type="text" className="form-control" name="seating_capacity" value={input.seating_capacity} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">rent_per_day</label>
                                <input type="text" className="form-control" name="rent_per_day" value={input.rent_per_day} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">city</label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">availability_status</label>
                                <select className="form-select" name="availability_status" value={input.availability_status} onChange={inputHandler}>
                                <option value="Select Mode">Select Mode</option>
                                <option value="Available">Available</option>
                                <option value="Booked">Booked</option>           
                                <option value="Maintenance">Maintenance</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <button className="btn btn-success" onClick={readvalue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}

export default AddCar