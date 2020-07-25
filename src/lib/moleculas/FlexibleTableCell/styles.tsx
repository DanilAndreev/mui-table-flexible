/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    cellContainer: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    handle: {
        width: "8px",
        backgroundColor: grey[200],
        cursor: "col-resize",
        "&:hover": {
            backgroundColor: grey[400],
        },
        "&:active": {
            backgroundColor: grey[500],
        },
    },
    content: {
        flexGrow: 1,
    },
    overflowHidden: {
        overflow: "hidden",
    },
    root: {
        display: "inline-block",
        userSelect: "none",
    }
}));