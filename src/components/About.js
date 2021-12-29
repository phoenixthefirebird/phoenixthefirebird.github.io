import React from 'react';
import Languages from './Languages';
import Tools from './Tools';

function About() {
  return (
      <div>
            <div className="row">
                <br/>
                <br/>
                <div className="col s12 l4">
                    <img className="profile-picture" alt="Phoenix" src=".\me.jpg" width="300" height="300" />
                    <div className="sec">
                        <br/>
                        <i class="fas fa-grin-alt"></i>
                        &nbsp; She/Her 
                        <br/>
                        <i class="fas fa-university"></i>
                        &nbsp; Third-Year Computer Engineering Student at UBC
                    </div>
                </div>    
                <div class="col s12 l8">
                    <h1>Hello! I am <span className="materialize-red lighten-1 white-text">Phoenix</span></h1>
                    <blockquote>
                        I'm a software engineering student and I'm passionate about delivering user-friendly software with clean and efficient code.
                        I strive to not only solve technically challenging problems but also to identify the right problems to solve.
                        <br/>
                        <br/>
                        Through my journey in becoming a better software engineer, I have gone from learning basic programming through books
                        and coding website, to understanding mathematic reasoning behind algorithms and design concepts and most importantly, 
                        to learn by building.  I'm fortunate enough to have amazing connections who had shown me unlike academia, there is no 
                        one definitive path to a good software engineer. It is instead a process of both exploring technologies and what 
                        truly matters to me. I like to attend business and tech related worshops hosted by student clubs to gain perspectives
                        in deciding what project to build. 
                        <br/>
                        <br/>
                        Besides time spent on professional development, I love to read a good sci-fi novel, check in (virtually now) with friends
                        and go to the gym. As tempting as it is to stay in front of my IDE all the time, I recognize that taking care of myself is 
                        key to productivity (and new ideas)!
                    </blockquote>
                </div>      
            </div>
            <Languages/>
            <Tools/>      
      </div>    
  );
}

export default About;