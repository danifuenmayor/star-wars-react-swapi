import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Vehicles = props => {
    const { store, actions } = useContext(Context)
    const { vehicles } = store
    return (
        <div className="container">
            <div className="row">
                    {
                        !!store.vehicles.results ?
                            (
                                store.vehicles.results.map((vehicle, i) => {
                                    return (
                                        <div key={i} className="col-4 py-2">
                                        <div className="card">
                                            <img src={"../images/" + vehicle.name.replace("/", "-") + ".jpg"} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <h5 className="card-title">{vehicle.name}</h5>
                                                <Link to={`/vehicles/${vehicle.id}`}>Find out more</Link>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })
                            ) : (<div className="col md">
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-grow text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                            )}
                </div>
        </div>

    )
}
export default Vehicles;