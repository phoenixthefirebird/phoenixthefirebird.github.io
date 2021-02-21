import React, { useState } from 'react';
import Languages from './Languages';
import Tools from './Tools';

function About() {
  return (
      <div>
          <br/>
            <div className="row">
                <div className="col s12 m4">
                    <img className="profile-picture" src=".\me.jpg" width="300" height="300" />
                </div>    
                <div class="col s12 m8">
                    <h1>Hello! I am <span className="materialize-red lighten-2 white-text">Phoenix</span></h1>
                    <h5>Welcome to my page</h5>
                    <blockquote>
                        I believe in impacting the world positively with the power and accessibility of software development.
                    </blockquote>
                </div>      
            </div>
            <Languages/>
            <Tools/>      
      </div>    
  );
}

export default About;