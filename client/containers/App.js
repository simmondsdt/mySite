import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  constructor(props){
    super(props);
    this.nav = this.nav.bind(this);
  }

  nav() {
    return(
      <div>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/experience'>Experience</Link></li>
        <li><Link to='/education'>Eduction</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </div>
    );
  }

  render() {
    return(
      <div>
        <nav className="color">
          <div className="nav-wrapper">
            <Link to='/' className='brand-logo'><div className="logo">Daniel Simmonds</div></Link>
            <a href="#" data-activates="mobile-view" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              { this.nav() }
            </ul>
            <ul className="side-nav" id="mobile-view">
              { this.nav() }
            </ul>
          </div>
        </nav>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
