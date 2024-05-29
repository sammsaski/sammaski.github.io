import React, { useState } from "react";
import { motion } from "framer-motion";

import "../../static/MainSubComponents/Publications.css";

function PublicationEntry(props) {
  const title = props.data.title;
  const authors = props.data.authors;
  const extra = props.data.extra;
  const conference = props.data.conference;
  const arxiv = props.data.arxiv;
  const github = props.data.github;
  const year = props.data.year;
  const details = props.data.details;

  // pass the styles down to the entry
  const styles = props.style;

  return (
    // <div className="publication-entry-container">
    //   {props && (
    //     <div>
    //       <div className="publication-entry-title">{title}</div>
    //       <div className="publication-entry-info">
    //         <div>{authors}</div>
    //         <div>{conference}</div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    props ? (
      <div className="publication-entry-container" style={styles}>
        <div className="publication-entry-main-subcontainer">
          <div className="publication-entry-title">{title}</div>
          <div className="publication-entry-info">
            <div>{conference}.</div>
            <div>{year}.</div>
          </div>
        </div>
        <div className="publication-entry-authors">{authors}</div>
      </div>
    ) : (
      <div></div>
    )
  );
}

export function Publications(props) {
  const pubs = props.data.publications;

  return (
    <div className="publications-container">
      {/* <h1 className="publications-intro">
        Thank you for your interest in my published works.
      </h1> */}
      {pubs &&
        pubs.map((item, index) => (
          <div className="publications-entry">
            <PublicationEntry
              data={item}
              style={{
                borderBottom: "1px solid var(--text-color)",
                borderTop: index === 0 ? "1px solid var(--text-color)" : "",
              }}
            />
          </div>
        ))}

      {/* <div className="publications-intro">{props.data.intro}</div> */}
      {/* {if (props.data.publications.length)} */}
      {/* {pubs.map((item) => (
        <div className="publications-entry">{item.title}</div>
      ))} */}
      {/* <div>{[props.data.publications]}</div> */}
    </div>
  );
}
