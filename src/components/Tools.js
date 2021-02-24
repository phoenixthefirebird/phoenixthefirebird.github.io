import {motion} from 'framer-motion'

function Tools() {
      const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 2.3,
            staggerChildren: 0.1
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
        <motion.div  className="sec" variants={container} initial="hidden" animate="visible">
            <motion.div  className="divider"></motion.div >
            <br/>
            <h5>Tools and Frameworks I've Worked With</h5>
            <motion.div  className="section">
                <motion.div  className="row">
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="Visual Studio Code"/>   
                        <motion.div  class="overlay2 cyan lighten-4">
                            <p className="vert">My favourite text editor!</p>
                        </motion.div >                 
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1024px-IntelliJ_IDEA_Logo.svg.png" alt="IntelliJ"/>                    
                        <motion.div  class="overlay2 red lighten-4">
                            <p className="vert">I used this first term in second year as my IDE for Java. IntelliJ provides smooth integration with Gradle.</p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git"/>
                        <motion.div  class="overlay2 green lighten-4">
                            <p className="vert">I still remember first learning to use Git in first year at a software development event where I was super baffled.
                            Now I can't live without it (as all software devs feel).
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://gradle.org/images/gradle-knowledge-graph-logo.png?20170228" alt="Gradle"/>
                        <motion.div  class="overlay2 purple lighten-4">
                            <p className="vert">I used it for automated building writing Java code. I learned to configure dependencies, build and test procedures with it.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://avatars.githubusercontent.com/u/874086?s=280&v=4" alt="JUnit"/>
                        <motion.div  class="overlay2 lime lighten-4">
                            <p className="vert">Favourite for unit testing with Java.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://raw.githubusercontent.com/mike-lischke/vscode-antlr4/master/misc/antlr-logo.png" alt="ANTLR"/>
                        <motion.div  class="overlay2 blue lighten-4">
                            <p className="vert">Parsers are amazing! I did several assignments involving ANTLR parser and wrote a parse tree from scratch in one of them!
                            </p>
                        </motion.div >
                    </motion.div >
                </motion.div >    
                <motion.div  className="row">
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://pytorch.org/assets/images/pytorch-logo.png" alt="PyTorch"/>
                        <motion.div  class="overlay2 pink lighten-4">
                            <p className="vert">I'm introduced to this library in my applied machine learning class and I love that we have pre-trained models. Check out my
                            Costa's vs Anna's hummingbird classifier!
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/718px-Tensorflow_logo.svg.png" alt="TensorFlow"/>
                        <motion.div  class="overlay2 deep-purple lighten-4">
                            <p className="vert">The MIT machine learning open class uses TensorFlow. I find that it wasn't hard to pick it up with PyTorch experience but TensorFlow does 
                            have better documentation.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React"/>
                        <motion.div  class="overlay2 red accent-1">
                            <p className="vert">I regret not learning about this framework sooner! Now I'm writing this site in React because that's how much I love it.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://ih1.redbubble.net/image.738129642.6518/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg" alt="Unix Command"/>
                        <motion.div  class="overlay2 blue accent-1">
                            <p className="vert">All the command line and SSH into school server in computer science classes pays off.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" alt="Docker"/>
                        <motion.div  class="overlay2 purple accent-1">
                            <p className="vert">I use Docker with my student design team and I love how it speeds up the testing process
                            and helps with dependency management. I'm still a newbie at it but I plan to learn more about it.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png" alt="Visual Studio"/>
                        <motion.div  class="overlay2 teal accent-1">
                            <p className="vert">This was the IDE I used in first year in C programming. Now I just use Valgrind and GDB in Visual Studio and 
                            forgo the print statements.
                            </p>
                        </motion.div >
                    </motion.div >
                </motion.div >
                <motion.div  className="row">
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://www.selenium.dev/images/selenium_logo_square_green.png" alt="Selenium"/>
                        <motion.div  class="overlay2 amber accent-1">
                            <p className="vert">I used Selenium to buil a simple shopping bot and later an image scraping program.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://verbose-equals-true.gitlab.io/django-postgres-vue-gitlab-ecs/django.jpg" alt="Django"/>
                        <motion.div  class="overlay2 pink accent-1">
                            <p className="vert">This is the first web framework I'm exposed to and it was also through working with the UAS team. I have a 
                            project idea coming up and I plan to use Django as my backend.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://i1.wp.com/orion42.net/wp-content/uploads/2019/06/Matlab-Logo.png?fit=698%2C702" alt=" MATLAB"/>
                        <motion.div  class="overlay2 lime accent-1">
                            <p className="vert">The all powerful tool for mathematicians and engineers that I wish I had the time to use more of. It helped 
                            when I was learning linear algebra and I went to a presentation about training ML model with MATLAB.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="Firebase"/>
                        <motion.div  class="overlay2 light-blue accent-1">
                            <p className="vert">I checked out a project based tutorial combining Firebase and React and it will definitely be my go to for lightweight web app.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/flask-logo.png" alt="Flask"/>
                        <motion.div  class="overlay2 red accent-1">
                            <p className="vert">If I want a less complex Python web framework than Django Flask would be my choice.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="npm"/>
                        <motion.div  class="overlay2 green accent-1">
                            <p className="vert">Same story with Git: npm was like magic to me when I first started using it and now I cannot do without it. Props to 
                            the open source community! (Would like to contribute in the future)
                            </p>
                        </motion.div >
                    </motion.div >
                </motion.div >    
                <motion.div  className="row">
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://www.logolynx.com/images/logolynx/1d/1d12643eaacd5b3183eae12407bf4891.jpeg" alt="GDB"/>
                        <motion.div  class="overlay2 indigo accent-1">
                            <p className="vert">Trusted (although dreary) tool for debugging assembly and C languages. I do try to avoid using GDB in C with Valgrind.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_7ee4293a8aaf4ebae71f9f8dd996e1d5/valgrind.png" alt="Valgrind"/>
                        <motion.div  class="overlay2 light-green accent-1">
                            <p className="vert">Hands down the only thing saving me from core dump errors and memory leaks.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://www.jackenhack.com/wp-content/uploads/2020/01/Quartus_prime_icon.png" alt="Quartus"/>
                        <motion.div  class="overlay2 red accent-1">
                            <p className="vert">Along with simulation in ModelSim, these two tools carried me through Verilog labs and proficiency tests.
                            Not shown is the Intel FPGA Monitor Program which made debugging ARM assembly possible for me.
                            </p>
                        </motion.div >
                    </motion.div >
                    <motion.div variants={item}  className="thumbnail col l2 m4 s6 container">
                        <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Google Collab"/>
                        <motion.div  class="overlay2 purple accent-1">
                            <p className="vert">I love the Linux VM and GPUs for ML model training, thank you Google for the free resources and credits!
                            </p>
                        </motion.div >
                    </motion.div >
                </motion.div >
            </motion.div >
        </motion.div >
    )
}

export default Tools