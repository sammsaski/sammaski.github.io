import React from "react";

import "../../static/MainSubComponents/Service.css";

function TeachingEntry(props) {
  const role = props.data.role;
  const courseNumber = props.data.courseNumber;
  const courseName = props.data.courseName;
  const university = props.data.university;
  const semester = props.data.semester;
  const year = props.data.year;
  const details = props.data.details;

  return props ? (
    <div className="teaching-entry-container">
      {/* {`${role} ${courseNumber} ${courseName} ${university} ${semester} ${year} ${details}`} */}
      {/* {`${role} for ${courseNumber}: ${courseName} at ${university} in ${semester} ${year}.`} */}
      {`${courseNumber}: ${courseName} at ${university}`}
      <ul className="teaching-details-list">
        {/* TODO: Fix the bullet point centering when more than 1 line */}
        <li className="teaching-details">{`Served as a ${role} in the ${semester} ${year} semester.`}</li>
        <li className="teaching-details">{details}</li>
      </ul>
    </div>
  ) : (
    <div></div>
  );
}

export function Service(props) {
  // TODO: put these details in a .json file.
  const ES140x = {
    role: "Teaching Assistant",
    courseNumber: "ES140x",
    courseName: "Introduction to Engineering Module (Computer Science)",
    university: "Vanderbilt University",
    semester: "Fall",
    year: "2023",
    details:
      "Responsible for supporting students with course content relating to principles of computer science using Python.",
  };

  const ECE4375 = {
    role: "Teaching Assistant",
    courseNumber: "ECE4375",
    courseName: "Embedded Systems",
    university: "Vanderbilt University",
    semester: "Spring",
    year: "2024",
    details:
      "Assisted with the undergraduate embedded systems course by guiding students through lab assignments.",
  };

  return (
    <div className="service-container">
      <div className="teaching-container">
        <TeachingEntry data={ES140x} />
        <TeachingEntry data={ECE4375} />
      </div>
      <div className="reviewing-container"></div>
    </div>
  );
}
