import React, { useState } from 'react';

function Navbar() {
  return (
    <nav className="red accent-2">
      <div className="row">
      <div className ="nav-wrapper col s8">
        <ul id="nav-mobile" className ="left hide-on-med-and-down">
            <li><a href="sass.html">About</a></li>
            <li><a href="badges.html">Experiences</a></li>
            <li><a href="collapsible.html">Projects</a></li>
            <li><a href="collapsible.html">Fun Facts</a></li>
            <li><a href="collapsible.html">My Stories</a></li>
            <li><a href="collapsible.html">Contact Me</a></li>
        </ul>
        </div>
        <div className="col s4">
        <nav>
          <div className="nav-wrapper red accent-1">
            <form>
              <div className="input-field">
                <input id="search" type="search" required/>
                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        </div>
      </div>        
    </nav>
    
  );
}

export default Navbar;