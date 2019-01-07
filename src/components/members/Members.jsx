import React, { Component } from "react";
import lian_thumb from "../../static/images/lian_300.jpg";
import da_thumb from "../../static/images/da_300.jpg";
import dean_thumb from "../../static/images/dean_300.jpg";
import Member from "./Member";
class Members extends Component {
  state = {
    members: [
      {
        id: 1,
        thumb: lian_thumb,
        name: "Lian Ulloa Mckion",
        resume:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"]
      },
      {
        id: 2,
        thumb: da_thumb,
        name: "Daniela LLivina Moreno",
        resume:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"]
      },
      {
        id: 3,
        thumb: dean_thumb,
        name: "Dean Pérez Martín",
        resume:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"]
      }
    ]
  };
  render() {
    return (
      <div className="members">
        {this.state.members.map(member => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    );
  }
}

export default Members;
