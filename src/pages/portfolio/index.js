import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <button onClick={() => handleShowModal(data)}>View Project</button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-container" onClick={handleCloseModal}>
            <div className="modal-window" onClick={(e) => e.stopPropagation()}>
              <button className="exit-btn" onClick={handleCloseModal}>Exit</button>
              {selectedProject && (
                <>
                  <h2>Project Details</h2>
                  <h2>{selectedProject.title}</h2>
                  {selectedProject.details.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <a 
              href={selectedProject.file} 
              download 
              className="download-btn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Demo/Project
            </a>

             <img src={selectedProject.img} alt="Project" className="modal-image" />
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
