import {motion} from 'framer-motion'

function Experience({long}) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: long? 5.3: 0.3,
            staggerChildren: 0.4
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }

    return(
        <motion.div variants={container} initial="hidden" animate="visible">
            <h1>👩🏻‍💻 Experience</h1>
            <br/> 
            <motion.div className="row">
                <motion.div className="col s10 offset-s1 l4 offset-l1">
                <motion.div variants={item} className="card">
                    <motion.div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://i2.wp.com/www.volleyballbc.org/wp-content/uploads/2018/08/ubc-logo-png-transparent.png?fit=2400%2C2400"/>
                    </motion.div>
                    <motion.div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Computer Engineering at UBC<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">Sept 2019 - April 2023</a></p>
                    <br/>
                    <p>I listed selected courses I have done but you can always refer to my transcript for all my courses!</p>
                    </motion.div>
                    <motion.div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <p><b>Course Work</b></p>
                    <ul>
                        <li>APSC 160 Introduction to Programming: A+ <br/><span className="red accent-1 white-text">&nbsp;C&nbsp;</span>&nbsp;<span className="red accent-1 white-text">&nbsp;Visual Studio&nbsp;</span></li>
                        <li>MATH 157 Linear Systems: A+
                            <br/><span className="blue accent-2 white-text">&nbsp;MATLAB&nbsp;</span> 
                        </li>
                        <li>CPEN 221 Principles of Software Construction: A 
                            <br/><span className="purple accent-1 white-text">&nbsp;Java&nbsp;</span> 
                            &nbsp;<span className="purple accent-1 white-text">&nbsp;IntelliJ&nbsp;</span>
                            &nbsp;<span className="purple accent-1 white-text">&nbsp;Gradle&nbsp;</span>
                            &nbsp;<span className="purple accent-1 white-text">&nbsp;JUnit&nbsp;</span>
                            &nbsp;<span className="purple accent-1 white-text">&nbsp;ANTLR&nbsp;</span>
                            &nbsp;<span className="purple accent-1 white-text">&nbsp;Git/GitHub&nbsp;</span>
                        </li>
                        <li>CPEN 211 Introduction to Microcomputers: A+ 
                            <br/><span className="cyan accent-3 white-text">&nbsp;Verilog&nbsp;</span> 
                            &nbsp;<span className="cyan accent-3 white-text">&nbsp;ModelSim&nbsp;</span>
                            &nbsp;<span className="cyan accent-3 white-text">&nbsp;Quartus&nbsp;</span>
                            &nbsp;<span className="cyan accent-3 white-text">&nbsp;ARM Assembly&nbsp;</span>
                            <br/><span className="cyan accent-3 white-text">&nbsp;Intel FPGA Monitor Program&nbsp;</span>
                        </li>
                        <li>MATH 302 Introduction to Probability: A+
                        </li>
                        <li>CPSC 261 Basics of Computer Systems
                            <br/><span className="orange accent-2 white-text">&nbsp;Visual Studio Code&nbsp;</span> 
                            &nbsp;<span className="orange accent-2 white-text">&nbsp;X86&nbsp;</span>
                            &nbsp;<span className="orange accent-2 white-text">&nbsp;C&nbsp;</span>
                            &nbsp;<span className="orange accent-2 white-text">&nbsp;GDB&nbsp;</span>
                            <br/><span className="orange accent-2 white-text">&nbsp;Unix Command&nbsp;</span>
                            &nbsp;<span className="orange accent-2 white-text">&nbsp;Git/BitBucket&nbsp;</span>
                        </li>
                        <li>CPSC 221 Basic Algorithms and Data Structures
                            <br/><span className="green accent-3 white-text">&nbsp;Visual Studio Code&nbsp;</span> 
                            &nbsp;<span className="green accent-3 white-text">&nbsp;C++&nbsp;</span>
                            &nbsp;<span className="green accent-3 white-text">&nbsp;Valgrind&nbsp;</span>
                            &nbsp;<span className="green accent-3 white-text">&nbsp;GDB&nbsp;</span>
                            <br/><span className="green accent-3 white-text">&nbsp;Unix Command&nbsp;</span>
                        </li>
                        <li>CPEN 291 Introduction to Applied Machine Learning
                            <br/><span className="indigo accent-1 white-text">&nbsp;PyTorch&nbsp;</span> 
                            &nbsp;<span className="indigo accent-1 white-text">&nbsp;Google Collab&nbsp;</span>
                            &nbsp;<span className="indigo accent-1 white-text">&nbsp;Selenium&nbsp;</span>
                        </li>
                    </ul>
                    </motion.div>
                </motion.div>
                <motion.div variants={item} className="card">
                            <motion.div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src="https://www.automation.com/getmedia/c31b5263-a584-47b3-b319-a8c56a2e18d5/logo_simplifying_underlogo"/>
                            </motion.div>
                            <motion.div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Software Developer Intern at Zaber Technologies<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">May 2021 - August 2021</a></p>
                            </motion.div>
                            <motion.div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                            <ul>
                                <li className="left-align">
                                    {/* &emsp;• Collaborated with peers to document wiring circuit design for an electric race car with RapidHarness, eliminating
                                    opportunities for misinterpretation  
                                    <br/>
                                    <br/>
                                    &emsp;• Spearheaded improvement of team communication by designing a Trello board and facilitating its adaptation,
                                    increasing efficiency of team and completeness of documentation process   
                                    <br/>
                                    <br/>
                                    &emsp;• Maintained and expanded sponsor relations, secured 6 pieces of busses for the team, ensuring project progress 
                                    <br/>
                                    <br/> */}
                                    Coming soon!
                                </li>
                                <li>
                                <br/><span className="red accent-2 white-text">&nbsp;React&nbsp;</span> 
                                    &nbsp;<span className="red accent-2 white-text center">&nbsp;Go&nbsp;</span>
                                </li>
                            </ul>
                            </motion.div>                    
                                            
                    </motion.div>  
                </motion.div>
                <motion.div className="col s10 offset-s1 l4 offset-l1">
                        <motion.div variants={item} className="card">
                            <motion.div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src=".\.\formula.png"/>
                            </motion.div>
                            <motion.div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Wiring Harness Subteam Member at Formula Electric Student Design Team<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Sept 2019 - April 2020</a></p>
                            </motion.div>
                            <motion.div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                            <ul>
                                <li className="left-align">&emsp;• Collaborated with peers to document wiring circuit design for an electric race car with RapidHarness, eliminating
                                    opportunities for misinterpretation  
                                    <br/>
                                    <br/>
                                    &emsp;• Spearheaded improvement of team communication by designing a Trello board and facilitating its adaptation,
                                    increasing efficiency of team and completeness of documentation process   
                                    <br/>
                                    <br/>
                                    &emsp;• Maintained and expanded sponsor relations, secured 6 pieces of busses for the team, ensuring project progress 
                                    <br/>
                                    <br/>
                                </li>
                                <li>
                                <br/><span className="purple accent-1 white-text">&nbsp;Rapid Harness&nbsp;</span> 
                                    &nbsp;<span className="purple accent-1 white-text center">&nbsp;Altium&nbsp;</span>
                                </li>
                            </ul>
                            </motion.div>                    
                                            
                    </motion.div>   
                    <motion.div variants={item} className="card">
                            <motion.div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src=".\.\UAS.jpg"/>
                            </motion.div>
                            <motion.div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Software Subteam Member at Unmanned Aircraft System Student Design Team<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">Oct 2020 - Present</a></p>
                            </motion.div>
                            <motion.div className="card-reveal">
                            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                            <ul>
                                <li className="left-align">&emsp;• Improved efficiency of telemetry control software by eliminating 0.3 second latency  
                                        <br/>
                                        <br/>
                                        &emsp;• Bridged Ground Command React frontend and Air Command Flask backend (two most important code bases) to ease
                                        mission planning
                                        <br/>
                                        <br/>
                                        &emsp;• Provided code reviews and collaborated in a team environment with Git and utilize continuous integration for pipelined
                                        testing
                                        <br/>
                                        <br/>
                                        &emsp;• Working on CD/CI framework with Makefile
                                    </li>
                                <li>
                                <br/><span className="orange accent-2 white-text">&nbsp;Docker&nbsp;</span> 
                                    &nbsp;<span className="orange accent-2 white-text center">&nbsp;React&nbsp;</span>
                                    &nbsp;<span className="orange accent-2 white-text center">&nbsp;Django&nbsp;</span>
                                </li>
                            </ul>
                        </motion.div>                                    
                    </motion.div>                  
                </motion.div>
            </motion.div>
            
        </motion.div>
    );
}

export default Experience