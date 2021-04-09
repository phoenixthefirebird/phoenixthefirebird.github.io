import React from "react";

const SkillButton = ({ skill, style }) => {
  return (
    <>
      <span className={style}>&nbsp;{skill}&nbsp;</span> &nbsp;
    </>
  );
};

export default SkillButton;
