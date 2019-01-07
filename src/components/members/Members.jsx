import React, { Component } from "react";

class Members extends Component {
  state = {
    members: [
      {
        id: 1,
        thumb: lian_thumb,
        name: "Lian Ulloa Mckion",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"],
        plxs: plxs1
      },
      {
        id: 2,
        thumb: da_thumb,
        name: "Daniela LLivina Moreno",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"],
        plxs: plxs2
      },
      {
        id: 3,
        thumb: dean_thumb,
        name: "Dean Pérez Martín",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iste velit rerum, similique eligendi, expedita sit molestias facere suscipit, pariatur error cupiditate nobis debitis sed doloribus ea dolor unde sapiente.",
        social: ["http://localhost", "http://localhost", "http://localhost"],
        plxs: plxs3
      }
    ]
  };
  render() {
    return <h1>Members</h1>;
  }
}

export default Members;
