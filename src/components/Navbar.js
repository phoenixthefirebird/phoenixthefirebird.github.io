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

    

function Navbar({setPanel, long, setLong}) {

  function toggle() {
    const tog = long == false;
    setLong(tog);
  }

  return (
  <div>
      <nav className="red accent-2">
      <div className="row">
      <div className ="nav-wrapper col m8 s6">
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
        <div className="col m4 s6">
        <div className="switch white-text">
            <label className="white-text">
              Pagenation
              <input type="checkbox" onClick={()=>toggle()}/>
              <span className="lever"></span>
              Long Page
            </label>
          </div>
        </div>
      </div>        
    </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="#" onClick={() => setPanel(1)}>About</a></li>
    <li><a href="#" onClick={() => setPanel(2)}>Experience</a></li>
    <li><a href="#" onClick={() => setPanel(3)}>Projects</a></li>
    <li><a href="#" onClick={() => setPanel(4)}>Fun Facts</a></li>
    <li><a href="#" onClick={() => setPanel(5)}>My Stories</a></li>
    <li><a href="#" onClick={() => setPanel(0)}>Contact Me</a></li>
  </ul>
  </div>
    
  );
}

export default Navbar;