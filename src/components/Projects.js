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
      <span>
        And more old projects waiting to be put on here plus some new projects!
        Stay tuned:)
      </span>
    </>
  );
}

export default Projects;
