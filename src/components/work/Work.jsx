import React from "react";
import "./Work.scss"

function WorkExperience(props) {
  return (
    <div className="work-experience" >
      <h4 >
        { props.title }
      </h4>
      <h6>
        {props.company}
        <small style={{ fontSize: 12, marginLeft: 20 }}>
          ({props.period})
        </small>
      </h6>
      <ul className="achievements">
        { props.achievements.map(ach => <li>{ach}</li>)}
      </ul>
    </div>
)
}

export default WorkExperience;