import React, { Component } from 'react';
import { Link } from 'react-router';
import Home from '../components/Home';

class App extends Component {
  constructor(props) {
    super(props)
    this.nav = this.nav.bind(this);
  }

  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  nav() {
    return(
      <nav className="color">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Daniel Simmonds</a>
          <a href="#" data-activates="mobile-view" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <Link to='/'>Home</Link>
          </ul>
          <ul className="side-nav" id="mobile-view">

          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return(
      <div>
        { this.nav() }
        <Home />
      </div>
    );
  }
}

export default App;
