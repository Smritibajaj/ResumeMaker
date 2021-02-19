import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MyEditor = (props) => {
    const {editorState, setEditorState} = props;
    const length = editorState.getCurrentContent().getPlainText('').length;

    const handleBlur = () => {
        console.log('Blur');
    }
  
    return (
        <Editor
          placeholder="Type away :)"
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
          onBlur={handleBlur}
        />
    );
  };
  
  export default MyEditor;