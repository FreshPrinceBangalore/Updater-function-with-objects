import React ,{useState} from "react";


function MyComponent(){
    const [car , setCar] = useState({year : 2024 , make : "Ford" , model : "Mustang"});

    function handleCarYear(event){
        setCar({...car, year: event.target.value})
    }

    function handleCarMake(event){
        setCar({...car, make: event.target.value})
    }

    function handleCarModel(event){
        setCar({...car, model: event.target.value})
    }

        return(
            <div>
                <p>Your favourite car is {car.year} {car.make} {car.model}</p>
                <input className="intype" type = "number" value = {car.year} onChange = {handleCarYear}/><br />
                <input className="intype" type = "text" value = {car.make} onChange = {handleCarMake} /> <br />
                <input className="intype" type = "text" value = {car.model} onChange={handleCarModel}/> <br />
            </div>
        );

}

export default MyComponent