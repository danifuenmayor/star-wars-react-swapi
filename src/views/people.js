import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const People = props => {
    const { store, actions } = useContext(Context)
    const { people } = store
    return (
        <div className="container">
            <div className="row">
                {
                    !!store.people.results ?
                        (
                            store.people.results.map((person, i) => {
                                return (
                                    <>
                                        <div key={i} className="col-4">
                                            <div className="card bg-dark">
                                                <img src={"../images/" + person.name + ".jpg"} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{person.name}</h5>
                                                    <Link to={`/people/${person.id}`}>Find out more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        ) : (<div className="col md">
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
export default People;