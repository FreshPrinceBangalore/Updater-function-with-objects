import React ,{useState} from "react";

function MyComponentUpdater(){
    const [car , setCar] = useState({year : 2024 , make : "Ford" , model : "Mustang"});

    function handleCarYear(event){
        setCar(c => ({...c, year: event.target.value}))
    }

    function handleCarMake(event){
        setCar(c => ({...c, make: event.target.value}))
    }

    function handleCarModel(event){
        setCar( c => ({...c, model: event.target.value}))
    }

        return(<>
        <h1>The below State uses Updater function in States</h1>
            <div>
                <p>Your favourite car is {car.year} {car.make} {car.model}</p>
                <input className="intype" type = "number" value = {car.year} onChange = {handleCarYear}/><br />
                <input className="intype" type = "text" value = {car.make} onChange = {handleCarMake} /> <br />
                <input className="intype" type = "text" value = {car.model} onChange={handleCarModel}/> <br />
            </div>
            </>
        );

}

export default MyComponentUpdater