import React, { useState, useEffect } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Fun from './Fun';
import Blog from './Blog';

function Center({panel, long}) {
    if(!long) {
        if(panel == 0) {
            return(null);
        }
        if(panel == 1) {
            return(
                <About/>
            );
        }
        if(panel == 2) {
            return(
                <Experience/>
            );
        }
        if(panel == 3) {
            return(
                <Projects/>
            );
        }
        if(panel == 4) {
            return(
                <Fun/>
            );
        }
        else {
            return(
                <Blog/>
            );
        }
    } else {
        return(
            <div>
                <About/>
                <Experience/>
                <Projects/>
                <Fun/>
                <Blog/>
            </div>
        );
    }
}

export default Center