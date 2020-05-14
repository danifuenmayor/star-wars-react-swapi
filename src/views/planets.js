import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Planets = props => {
    const { store, actions } = useContext(Context);
    const { planets } = store

    return (
        <div className="container">
        <div className="row">
                {
                    !!store.planets.results ?
                        (
                            store.planets.results.map((planet, i) => {
                                return (
                                    <div key={i} className="col-4 py-2">
                                    <div className="card">
                                        <img src={"../images/" + planet.name + ".jpg"} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                        <h5 className="card-title">{planet.name}</h5>
                                            <Link to={`/planets/${planet.id}`}>Find out more</Link>
                                        </div>
                                    </div>
                                    </div>
                                )
                            })
                        ) : (<div className="col md">
                            <div className="d-flex justify-content-center">
                                <div className="spinner-grow text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                        )}
            </div>
    </div>

    )
}
export default Planets;