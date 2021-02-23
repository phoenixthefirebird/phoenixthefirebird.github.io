import { Chrono } from "react-chrono";

function Projects() {
    const items = [{
        title: "May 1940",
        cardTitle: "Project 1",
        cardSubtitle:"Description of my amazing project",
        cardDetailedText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        media: {
          source: {
            url: "https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png",
            type:"png"
          },
          type: "IMAGE"
        }
      },
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "/me.jpg",
            type:"jpg"
          },
        }
      }]; //add more elements here

    return(
        <div id="projects">
            <h1>🔨Projects</h1>
            <div>
                <Chrono items={items} mode="VERTICAL" 
                    slideShow={true} allowDynamicUpdate theme={{primary: "#ef5350", secondary: "#64ffda", cardForeColor: "black" }} 
                    scrollable={{scrollbar: true}}> 
                {/* <div>
                <img src="/me.jpg" className="thumbnail"/>
                </div> */}
                </Chrono>
            </div>
        </div>
    );
}

export default Projects