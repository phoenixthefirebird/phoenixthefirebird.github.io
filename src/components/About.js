import React, { useState } from 'react';

function About() {
  return (
      <div>
          <br/>
            <div>
            <img className="profile-picture" src=".\me.jpg" width="150" height="150" />
            <h1>Hello! My name is <span className="materialize-red lighten-2 white-text">Phoenix</span></h1>
            <h5>I'm a 2nd year Computer Engineering student at UBC</h5>
            </div>
            <div>
            <div>
            <blockquote className="left aligned">
                I believe in impacting the world positively with the power and accessibility of software development.
            </blockquote>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th><img src="https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png" alt="Java"/></th>
                            <th><img src="https://www.freecodecamp.org/news/content/images/2020/05/Python-language.png" alt="Python"/></th>
                            <th><img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="Cpp"/></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
      </div>    
  );
}

export default About;