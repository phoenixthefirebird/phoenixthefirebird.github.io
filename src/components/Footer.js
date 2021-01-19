import React, { useState } from 'react';


function Footer() {
    const emailCopy = (e) =>
    {   
        navigator.clipboard.writeText('phoenixanaisliu@gmail.com');
        alert("Email copied successfully!");
    } 
  return (
    <footer className="page-footer red accent-2">
    <div className="container">
      <div className="row">
        <div className="col l3 s12">
          <h5 className="white-text">Contact Me</h5>
          <p className="grey-text text-lighten-4">Feel free to connect with me!</p>
          <ul>
            <li><a className="waves-effect waves-teal btn-flat white-text" href="https://github.com/phoenixthefirebird" target="blank"><i className="fab fa-github"></i>   Github  </a></li>
            <li><a className="waves-effect waves-teal btn-flat white-text" href="https://www.linkedin.com/in/phoenixanaisliu/" target="blank"><i className="fab fa-linkedin"></i> Linkedin</a></li>
            <li><a className="waves-effect waves-teal btn-flat white-text" href="https://www.facebook.com/profile.php?id=100009610880746" target="blank"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a className="waves-effect waves-teal btn-flat white-text" href="#" onClick={emailCopy}><i className="far fa-envelope"></i> Email</a></li>
            
          </ul>
        </div>
        <div className="col l7 offset-l2 s12">
        <div className="row">
            <form>
                <div className="row">
                  <div className="col s6">
                    <div className="input-field">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label for="icon_prefix">Full Name</label>
                    </div>
                  </div>
                    <div className="col s6">
                      <div className="input-field">
                          <i className="material-icons prefix">email</i>
                          <input id="icon_prefix" type="text" className="validate"/>
                          <label for="icon_prefix">Email</label>
                      </div>
                    </div>
                </div>                                    
                <div className="input-field">
                        <i className="material-icons prefix">border_color</i>
                        <input id="icon_prefix" type="text" className="validate"/>
                        <label for="icon_prefix">Subject</label>
                </div>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Textarea</label>
                      </div>
                    </div>
                  </form>
                </div>
            </form>
  </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2020 Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">Back to the Top</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;