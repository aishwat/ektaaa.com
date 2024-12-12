import React from "react";
import { Fragment } from "react";

const CV = () => {
  return (
      <Fragment>
          <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
              <object
                  data="/pdfs/EktaCV.pdf"
                  type="application/pdf"
                  style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                  }}
              >
                  <p>
                      Your browser does not support PDFs. Please download the PDF to view
                      it:{" "}
                      <a href="/pdfs/EktaCV.pdf" target="_blank" rel="noopener noreferrer">
                          Download PDF
                      </a>
                  </p>
              </object>
          </div>
      </Fragment>
  );
};

export default CV;
