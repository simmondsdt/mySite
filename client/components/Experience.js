import React, { Component } from 'react';

class Experience extends Component {

  render(){
    return(
      <div className='container center'>
        <div className='smallspacer'></div>
          <h4>Savvi</h4>
          <div className='row'>
            <div className='col s5'>
              <h5>Full Stack Development <br /> Part Time</h5>
            </div>
            <div className='col s5 offset-s2'>
            	<h5>March 2017 -- Present</h5>
            </div>
          </div>
          <div className='row'>
            Full Stack Web Development focused on updating from Rails 3 to Rails 5 and to update the current code to a more modern and fluid design with a team of 3 other developers.
          </div>
          <h6><a href='https://www.savvi.com' target='_blank'>What is Savvi?</a></h6>
        <br />
          <h4>DevPoint Labs</h4>
          <div className='row'>
            <div className='col s5'>
              <h5>Full Stack Development <br /> Full Time</h5>
            </div>
            <div className='col s5 offset-s2'>
              <h5>October 2016 -- January 2017</h5>
            </div>
          </div>
          <div className='row'>
            An 11 week Full Stack Ruby on Rails Web Developer course that teaches best practices for recent and relevant programming practices. Every day we were given a lecture in the morning about our next lesson and then in the afternoon we had open lab time to work on homework, ask the teachers and TA’s questions, and even work on personal projects. I participated in many group and personal projects that used all of the knowledge I learned through the course and through my own teachings. My final project that I worked on with my team was Devume and can be found here -> <a href='https://devume.herokuapp.com' target='_blank'>Devume</a>  
          </div>
          <h6><a href='http://www.devpointlabs.com/' target='_blank'>What is DevPoint Labs?</a></h6>
      </div>
    );
  }
}

export default Experience;
