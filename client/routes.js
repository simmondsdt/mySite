import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="skills" component={Skills} />
      <Route path="contact" component={Contact} />
      <Route path="experience" component={Experience} />

      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
