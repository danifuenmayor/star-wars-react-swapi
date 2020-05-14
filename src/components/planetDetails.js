import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const PlanetDetails = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        if (!!planets.results) {
            setPlanet(planets.results.find(element => element.id === id))
        }
    })

    return (
        <div className="container">
            <div className="row">
                {
                    planet ?
                        <>
                            <div className="col-4 py-2">
                                <div className="card bg-dark">
                                    <img src={"../images/" + planet.name + ".jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{planet.name}</h5>
                                        <p className="card-text text-primary">This planet's weather is {planet.climate}</p>

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
export default PlanetDetails;