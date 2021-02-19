import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ContentViewer = (props) => {
    const { content } = props;
    const options = { decodeEntities: true };
    return(
        <div>{ReactHtmlParser(content, options)}</div>
    )
}

export default ContentViewer;