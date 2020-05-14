import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const VehicleDetails = props => {
    const { store, actions } = useContext(Context);
    const { vehicles } = store
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        if (!!vehicles.results) {
            setVehicle(vehicles.results.find(element => element.id === id))
        }
    },[])

    return (
        <div className="container">
            <div className="row">
                {
                    vehicle?
                    <>
                    <div className="col-4 py-2">
                        <div className="card bg-dark">
                            <img src={"../images/" + vehicle.name + ".jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text text-primary">This vehicle has a cargo capacity of {vehicle.cargo_capacity}</p>

                            </div>
                        </div>
                    </div>
                </>
                :

                <div className="col md">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-grow text-info" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>

    )
}
export default VehicleDetails;