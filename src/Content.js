import React from "react";
import MyEditor from "./Editor";

const Content = (props) => {
  const {
    state: {
      section1,
      section2,
      section3,
      section4,
      setSection1,
      setSection2,
      setSection3,
      setSection4,
    },
  } = props;
  return (
    <>
      <MyEditor editorState={section1} setEditorState={setSection1} />
      <MyEditor editorState={section2} setEditorState={setSection2} />
      <MyEditor editorState={section3} setEditorState={setSection3} />
      <MyEditor editorState={section4} setEditorState={setSection4} />
    </>
  );
};

export default Content;
