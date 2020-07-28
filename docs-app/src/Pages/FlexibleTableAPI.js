/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import FlexibleTableApiPath from "./../Markdown/FlexibleTable-API.md"
import marked from "marked"

export default function FlexibleTableAPI() {
    const [markdown, setMarkdown] = React.useState('');
    React.useEffect(() => {
        fetch(FlexibleTableApiPath)
            .then(response => response.text())
            .then(text => setMarkdown(text));
    }, []);
    return (
        <React.Fragment>
            {/*<ReactMarkdown source={markdown}/>*/}
            <div dangerouslySetInnerHTML={{__html: marked(markdown)}} />
        </React.Fragment>
    );
}