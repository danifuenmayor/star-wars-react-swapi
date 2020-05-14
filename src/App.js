import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './views/home';
import InjectContext from './store/appContext';
import People from './views/people';
import Planets from './views/planets';
import Vehicles from './views/vehicles';
import PeopleDetails from './components/peopleDetails';
import PlanetDetails from './components/planetDetails';
import VehicleDetails from './components/vehicleDetails';

const App = props => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">StarWars</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/people">People<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">Planets<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vehicles">Vehicles</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People}/>
        <Route path="/people/:id" component={PeopleDetails}/>
        <Route path="/planets/:id" component={PlanetDetails} />
        <Route path="/planets" component={Planets} />
        <Route path="/vehicles/:id" component={VehicleDetails}/>
        <Route path="/vehicles" component={Vehicles} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}
export default InjectContext(App);
