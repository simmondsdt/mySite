import React, { Component } from 'react';

class Skills extends Component {

  render() {
    return(
      <div className="center">
        <ul className="collapsible popout" data-collapsible="accordion">
          <li>
            <div className="collapsible-header">Frameworks</div>
            <div className="collapsible-body">
              <span>Ruby on Rails</span>
            </div>
            <div className="collapsible-body">
              <span>ReactJS, Webpack/Repack , JQuery, React-Native (Java and Objective-C through JS)</span>
            </div>
            <div className="collapsible-body">
              <span>Bootstrap, Materialize</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Languages</div>
            <div className="collapsible-body">
              <span>Ruby</span>
            </div>
            <div className="collapsible-body">
              <span>JavaScript</span>
            </div>
            <div className="collapsible-body">
              <span>CSS/SASS</span>
            </div>
            <div className="collapsible-body">
              <span>HTML</span>
            </div>
            <div className="collapsible-body">
              <span>JSON</span>
            </div>
            <div className="collapsible-body">
              <span>SQL</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Database Managment</div>
            <div className="collapsible-body">
              <span>Postgresql and PGAdmin</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">APIs</div>
            <div className="collapsible-body">
              <span>Ruby on Rails API</span>
            </div>
            <div className="collapsible-body">
              <span>AJAX, AXIOS</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Test Driven Development</div>
            <div className="collapsible-body">
              <span>RSpec for Rails</span>
            </div>
            <div className="collapsible-body">
              <span>Jest for React</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Package Managers</div>
            <div className="collapsible-body">
              <span>Yarn, NPM, Brew</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Version Control Software</div>
            <div className="collapsible-body">
              <span>Git and Github</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Hosting</div>
            <div className="collapsible-body">
              <span>Heroku Git and Heroku</span>
            </div>
            <div className="collapsible-body">
              <span>Custom domains and DNS setup</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">Environments</div>
            <div className="collapsible-body">
              <span>Unix, iOS and Android environments</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skills;
