import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Pdf from "react-to-pdf";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Navbar,
  Form,
  Button,
} from "react-bootstrap";
import "./css/App.css";

const App = () => {
  const ref = React.createRef();
  const [activeTab, setActiveTab] = useState("2");
  const handleTabSelection = (key) => {
    setActiveTab(key);
  };
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  const [header, setHeader] = useState({
    backgroundColor: "#ffffff",
    textColor: "",
    fontStyle: "",
    fontSize: "",
    link: {
      linkText: "",
      linkUrl: "",
    },
    name: "Simmy Bajaj",
    email: "simmybajaj@1603@gmail.com",
    phoneNumber: "",
    location: "",
  });

  const handleChangeComplete = (color) => {
    setHeader({ ...header, backgroundColor: color.hex });
  };

  const handlePreviousTab = (event) => {
    event.preventDefault();
    const tab = parseInt(activeTab) - 1;
    if (tab >= 1 && tab <= 7) setActiveTab(`${tab}`);
  };

  const handleNextTab = (event) => {
    event.preventDefault();
    const tab = parseInt(activeTab) + 1;
    if (tab >= 1 && tab <= 7) setActiveTab(`${tab}`);
  };
  return (
    <>
      <Navbar bg="light" fixed="top">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
      <Container fluid className={`p-0 overflow-top`}>
        <Row className="min-height-canvas">
          <Col lg="5">
            <Tab.Container
              id="left-tabs"
              activeKey={activeTab}
              onSelect={handleTabSelection}
            >
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1">Templates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Awards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="5">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="6">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="7">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1"></Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <Form>
                        <Form.Group controlId="formBasicName">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="johnsmith@gmail.com"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicMobile">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="(555) 123-4567"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                          <Form.Label>Location</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New York, NY"
                          />
                        </Form.Group>
                        <Form.Group controlId="formBasicLink">
                          <Form.Label>Link</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="mycoolportfolio.com/myname"
                          />
                        </Form.Group>
                        <Form.Group className="d-flex">
                          <Form.Label>Background Color</Form.Label>
                          <div
                            style={{
                              marginLeft: "1rem",
                              padding: "0.5rem",
                              background: "#fff",
                              borderRadius: "1px",
                              boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              onClick={handleClick}
                              style={{
                                width: "36px",
                                height: "14px",
                                borderRadius: "2px",
                                background: `${header.backgroundColor}`,
                              }}
                            >
                              <div />
                            </div>
                            {displayColorPicker ? (
                              <div
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                }}
                              >
                                <div
                                  onClick={handleClose}
                                  style={{
                                    position: "fixed",
                                    top: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    left: "0px",
                                  }}
                                />
                                <SketchPicker
                                  color={header.backgroundColor}
                                  onChange={handleChangeComplete}
                                />
                              </div>
                            ) : null}
                          </div>
                        </Form.Group>
                        <Form.Group className="d-flex">
                          <Form.Label>Font Color</Form.Label>
                          <div
                            style={{
                              marginLeft: "1rem",
                              padding: "0.5rem",
                              background: "#fff",
                              borderRadius: "1px",
                              boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                              display: "inline-block",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              onClick={handleClick}
                              style={{
                                width: "36px",
                                height: "14px",
                                borderRadius: "2px",
                                background: `${header.backgroundColor}`,
                              }}
                            >
                              <div />
                            </div>
                            {displayColorPicker ? (
                              <div
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                }}
                              >
                                <div
                                  onClick={handleClose}
                                  style={{
                                    position: "fixed",
                                    top: "0px",
                                    right: "0px",
                                    bottom: "0px",
                                    left: "0px",
                                  }}
                                />
                                <SketchPicker
                                  color={header.backgroundColor}
                                  onChange={handleChangeComplete}
                                />
                              </div>
                            ) : null}
                          </div>
                        </Form.Group>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">hi js</Tab.Pane>
                    <Tab.Pane eventKey="4">hi js</Tab.Pane>
                    <Tab.Pane eventKey="5">hi js</Tab.Pane>
                    <Tab.Pane eventKey="6">hi js</Tab.Pane>
                    <Tab.Pane eventKey="7">hi js</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col lg="7" className="pdf-section bg-secondary h-100 overflow-auto">
            <Container ref={ref} className="bg-white my-5 paper">
              <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'240px' ,width:'100%',color:header.color, background: header.backgroundColor}}>
                <div>{header.name}</div>
                <div>{header.email}</div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Navbar bg="light" fixed="bottom">
        <Container>
          <Button variant="secondary" onClick={(e) => handlePreviousTab(e)}>
            Previous
          </Button>
          <Button variant="secondary" onClick={(e) => handleNextTab(e)}>
            Next
          </Button>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <Button variant="secondary" onClick={toPdf}>
                Generate Pdf
              </Button>
            )}
          </Pdf>
        </Container>
      </Navbar>
    </>
  );
};

export default App;
