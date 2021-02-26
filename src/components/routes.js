import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import App from '../App';
//import AppDOM from '../AppDOM';

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
            {/*             <Route path="/chessyDOM" component={AppDOM} exact /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default Routes;
