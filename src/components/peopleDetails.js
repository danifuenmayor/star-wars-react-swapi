import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const PeopleDetails = props => {
    const { store, actions } = useContext(Context)
    const { people } = store
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [planet, setPlanet] = useState(null);
    const [planetLoading, setPlanetLoading] = useState(false);

    useEffect(() => {
        if (!!people.results) {
            setPerson(people.results.find(element => element.id === id))
            setPlanetLoading(true)
            if (!!person) {
                fetch(person.homeworld)
                    .then(resp => resp.json())
                    .then(data => {
                        setPlanet(data);
                        setPlanetLoading(false);
                    })
            }
        }
    }, [person, people.results])



    return (
        <div className="container">
            <div className="row">
                {
                    !!person ?
                        <>
                            <div className="col-4 py-2">
                                <div className="card bg-dark">
                                    <img src={"../images/" + person.name + ".jpg"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{person.name}</h5>
                                        <p className="card-text text-light">{planetLoading ? 'Loading...' : planet.name}</p>
                                        <p className="card-text text-primary">This character was born in {person.birth_year}</p>

                                    </div>
                                </div>
                            </div>
                        </>


                        : (<div className="col md">
                            <div className="d-flex justify-content-center">
                                <div className="spinner-grow text-info" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                        )}
            </div>
        </div>

    )
}
export default PeopleDetails;