// import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Description } from './components/remix/Description';
import { ResearchDescription } from './components/remix/ResearchDescription';
import { WorkDescription } from './components/remix/WorkDescription';

/**
 *  NOTE: - Keep using react-bootstrap to layout the website. Follow along with the wireframe on Figma.
 *          Resource for working with react-bootstrap : https://react-bootstrap.github.io/layout/grid/#responsive-grids
 * 
 */

function App() {
  return (
    <div className="App">
      {/* <div className='vh-100'> */}
      <div id='background'>
        <Container id='cont'> {/* Start of landing page container.*/}
          
          <Row> {/* Start of description container.*/}
            <Col md={4} className='text-start'>
              <h1 id='title' className=''>samuel sasaki</h1>

              {/* <p className=''>Incoming Computer Science P.h.D. Candidate at Vanderbilt University.</p>
              <p className=''>My research interests are in the areas of machine learning + computer vision, autonomous systems + verification, and high-performance computing.</p>
              <p className=''>Open to research + software engineering opportunities!</p> */}
            </Col>
            <Col md={2} className='text-start pt-3'>
              <p>⎯⎯⎯⎯⎯⎯</p>
            </Col>

            <Col md={6}>
              <p className='text-start pt-3'>Computer Science P.h.D. Candidate at Vanderbilt University.</p>
            </Col>

          </Row> {/* End of description container.*/}

          <Row> {/* Start of research container. */}
            <Col md={11} id='section' className='text-start'>
              {/* <a id='cl' className='btn' data-bs-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>
                <h1 id='section-header'>research</h1>
              </a> */}
              <ResearchDescription></ResearchDescription>

            </Col>
          </Row> {/* End of research container. */}


          <Row> {/* Start of work container.*/}
            <Col md={10} id='section' className='text-start'>
              <WorkDescription></WorkDescription>
            </Col>
          </Row> {/* End of work container.*/}

        </Container> {/* End of landing page container.*/}
      </div>
    </div>
  );
}

export default App;
