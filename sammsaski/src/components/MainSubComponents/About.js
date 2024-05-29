import React from "react";

import "../../static/MainSubComponents/About.css";

function EducationEntry(props) {
  const college = props.data.college;
  const gpa = props.data.gpa;
  const major = props.data.major;
  const extras = props.data.extras;

  return props ? (
    <div className="education-entry-container">
      {`${college} ${gpa} ${major} ${extras}`}
    </div>
  ) : (
    <div></div>
  );
}

export function About(props) {
  const education = props.data.education;
  const about = props.data.about;

  return (
    <div className="about-education-container">
      <div className="education-container">
        {/* {education && education.map((item) => <EducationEntry data={item} />)} */}
        <div className="education-entry-container">
          I graduated from Pomona College with a Bachelor of Arts as a double
          major in Computer Science and Mathematics. During my time there, I
          developed the foundational skills used for putting computer vision
          into practice and spent all 4 years as a starter on the Men's Water
          Polo Team.
        </div>

        <div className="education-entry-container">
          Now, I am a Ph.D. student in Computer Science at Vanderbilt University
          under the advisory of Dr. Taylor Johnson. As a member of the VeriVITAL
          lab, I have focused my efforts on expanding the theory of formal
          verification targetted on neural networks. This work seeks to improve
          the reliability of deep learning-enabled systems, particularly those
          used in safety-critical settings.
        </div>
      </div>

      <div className="about-container">
        <div className="about-details">{about}</div>
      </div>
    </div>
  );
  return <div className=""></div>;
}
