/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Paper from "@material-ui/core/Paper";
import SyntaxHighlighter from "react-syntax-highlighter";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    codePaper: {
        backgroundColor: grey[200],
    }
}));

export default function Code({children, language = 'jsx', codeStyle = docco, style, className}) {
    const classes = useStyles();
    const codeStyleTransparentBackground = { ...codeStyle, hljs: {...codeStyle.hljs, background: 'none'}};
    return (
        <Paper style={{...style}} className={clsx(classes.codePaper, className)} elevation={0}>
            <SyntaxHighlighter language={language} style={codeStyleTransparentBackground}>
                {children}
            </SyntaxHighlighter>
        </Paper>
    );
}