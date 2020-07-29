/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import FlexibleTableApiPath from "./../Markdown/FlexibleTable-API.md"
import {H1, H2, H4} from "../Components/Headers";
import Code from "../Components/Code";

const imports = `
import {FlexibleTable} from "@danilandreev/mui-table-flexible";
//or 
import FlexibleTable from "@danilandreev/mui-table-flexible/dist/organizms/FlexibleTable";
`;

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
            <H1>FlexibleTable API</H1>
            <H4>The API documentation of the FlexibleTable React component. Learn more about the props and the CSS customization points.</H4>
            <H2>Import</H2>
            <Code theme={"darcula"}>{imports.trim()}</Code>
        </React.Fragment>
    );
}