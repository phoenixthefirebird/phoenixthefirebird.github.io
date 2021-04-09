import React from "react";
import SkillButton from "./SkillButton";

const ProjectCards = ({ project }) => {
  const {
    id,
    cardImage,
    cardTitle,
    cardDesc,
    link,
    skills,
    style,
    target,
  } = project;
  return (
    <div className="col l4">
      <div class="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={cardImage} />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {cardTitle}
          </span>
        </div>
        <div class="card-content">
          {skills.map((skill) => {
            return <SkillButton skill={skill} style={style}></SkillButton>;
          })}
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {cardTitle}
            <i class="material-icons right">close</i>
          </span>
          <p className="left-align">{cardDesc}</p>
          <p>
            {link && (
              <a href={target} target="_blank">
                Learn More
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
