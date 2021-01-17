import React, { useState } from 'react';

function About() {
  return (
      <div>
            <h1>Hello! My name is Phoenix, welcome to my portfolio</h1>
            <div>
            <img src=".\img\self.png" width="150" height="150" />
            <h1>Hello! My name is Phoenix</h1>
            <h3>I'm a 2nd year CPEN student at UBC</h3>
            </div>
            <div>
            <div>
                <h1>About</h1>
                <p>[short snippet about my background and aspirations]</p>
            </div>
            <div>
                <p>[interest heading]</p>
                <ul>
                <li>[do thing 1]</li>
                <li>[do thing 2]</li>
                <li>[do thing 3]</li>
                </ul>
            </div>
            </div>
            <div>
            <h3>Projects</h3>
            <div class="grid-table">
                </div>
            </div>
            <div>
            <h3>Contact</h3>
            <p>My Links</p>
            <div>
            </div>
            </div>

      </div>    
  );
}

export default About;