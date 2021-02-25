import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import App from '../App';
//import chessyDOM from './flex1.js';

class Routes extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div>
          <nav className="topPage">
            <div className="topNav">
              <NavLink to="/chessyRedux" exact={true}>
                <p>ChessyRedux</p>
              </NavLink>
              <NavLink to="/chessyDOM" exact={true}>
                <p>ChessyHTML</p>
              </NavLink>
            </div>
          </nav>
          <main>
            <Route path="/" component={App} exact />
            <Route path="/chessyRedux" component={App} exact />
            {/*   <Route path="/chessyDOM" component={chessyDOM} exact /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default Routes;
