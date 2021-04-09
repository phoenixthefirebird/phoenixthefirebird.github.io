import ProjectCards from "./ProjectCards";
import { prodesc } from "../data/prodesc";

function Projects() {
  return (
    <>
      <h1>🔨Projects</h1>
      <div className="row"></div>
      <div className="row">
        {prodesc.map((project) => {
          return <ProjectCards project={project}></ProjectCards>;
        })}
      </div>
    </>
  );
}

export default Projects;
