import React, { useState } from 'react';
import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
});
});

    

function Navbar({setPanel}) {
  return (
  <div>
      <nav className="red accent-2">
      <div className="row">
      <div className ="nav-wrapper col s8">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul className ="left hide-on-med-and-down">
            <li><a href="#" onClick={() => setPanel(1)}>About</a></li>
            <li><a href="#" onClick={() => setPanel(2)}>Experience</a></li>
            <li><a href="#" onClick={() => setPanel(3)}>Projects</a></li>
            <li><a href="#" onClick={() => setPanel(4)}>Fun Facts</a></li>
            <li><a href="#" onClick={() => setPanel(5)}>My Stories</a></li>
            <li><a href="#contact">Contact Me</a></li>
            {/* todo: change the link here */}
        </ul>
        </div>
        <div className="col s4">
        <nav>
          <div className="nav-wrapper red accent-2">
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

  <ul class="sidenav" id="mobile-demo">
    <li><a href="#" onClick={() => setPanel(1)}>About</a></li>
    <li><a href="#" onClick={() => setPanel(2)}>Experience</a></li>
    <li><a href="#" onClick={() => setPanel(3)}>Projects</a></li>
    <li><a href="#" onClick={() => setPanel(4)}>Fun Facts</a></li>
    <li><a href="#" onClick={() => setPanel(5)}>My Stories</a></li>
    <li><a href="#contact">Contact Me</a></li>
  </ul>

  </div>
    
  );
}

export default Navbar;