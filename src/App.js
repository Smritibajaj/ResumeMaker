import React, { useState } from "react";
import Pdf from "react-to-pdf";
import Content from "./Content";
import Template from "./Template";
import HeaderSetting from "./HeaderSetting";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from "html-to-draftjs";
import ContentViewer from "./ContentViewer";
import { Container, Row, Col, Tab, Nav, Navbar, Button } from "react-bootstrap";
import "./css/App.css";

const App = () => {
  const ref = React.createRef();
  const [activeTab, setActiveTab] = useState("2");
  const handleTabSelection = (key) => {
    setActiveTab(key);
  };
  const html1 = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
  const contentBlock1 = htmlToDraft(html1);
  const contentState1 = ContentState.createFromBlockArray(
    contentBlock1.contentBlocks
  );
  const html2 = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
  const contentBlock2 = htmlToDraft(html2);
  const contentState2 = ContentState.createFromBlockArray(
    contentBlock2.contentBlocks
  );
  const html3 = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
  const contentBlock3 = htmlToDraft(html3);
  const contentState3 = ContentState.createFromBlockArray(
    contentBlock3.contentBlocks
  );
  const html4 = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
  const contentBlock4 = htmlToDraft(html4);
  const contentState4 = ContentState.createFromBlockArray(
    contentBlock4.contentBlocks
  );
  const [section1, setSection1] = React.useState(() =>
    contentBlock1
      ? EditorState.createWithContent(contentState1)
      : EditorState.createEmpty()
  );
  const [section2, setSection2] = React.useState(() =>
    contentBlock2
      ? EditorState.createWithContent(contentState2)
      : EditorState.createEmpty()
  );
  const [section3, setSection3] = React.useState(() =>
    contentBlock3
      ? EditorState.createWithContent(contentState3)
      : EditorState.createEmpty()
  );
  const [section4, setSection4] = React.useState(() =>
    contentBlock4
      ? EditorState.createWithContent(contentState4)
      : EditorState.createEmpty()
  );
  const state = {
    section1,
    section2,
    section3,
    section4,
    setSection1,
    setSection2,
    setSection3,
    setSection4,
  };
  const section1Content = draftToHtml(convertToRaw(section1.getCurrentContent()))
  const section2Content = draftToHtml(convertToRaw(section2.getCurrentContent()))
  const section3Content = draftToHtml(convertToRaw(section3.getCurrentContent()))
  const section4Content = draftToHtml(convertToRaw(section4.getCurrentContent()))
  const [header, setHeader] = useState({
    backgroundColor: "#bbb",
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
    <div className="width-100 p-0 m-0">
      <Navbar bg="light" fixed="top">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
      <Container fluid className={`overflow-top`}>
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
                      <Nav.Link eventKey="1">Template</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Header</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Content</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Footer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <Template />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <HeaderSetting header={header} setHeader={setHeader} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <Content state={state} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <HeaderSetting header={header} setHeader={setHeader} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
          <Col
            lg="7"
            className="bg-secondary h-100 overflow-auto p-0 d-flex justify-content-center"
          >
            <Container className="bg-white my-5 p-0 m-0 paper">
              <div
                style={{ padding: 0, margin: 0, width: "100%", height: "100%" }}
                ref={ref}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "240px",
                    width: "100%",
                    color: header.color,
                    background: header.backgroundColor,
                  }}
                >
                  <div>{header.name}</div>
                  <div>{header.email}</div>
                </div>
                <ContentViewer content={section1Content} />
                <ContentViewer content={section2Content} />
                <ContentViewer content={section3Content} />
                <ContentViewer content={section4Content} />
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
    </div>
  );
};

export default App;
