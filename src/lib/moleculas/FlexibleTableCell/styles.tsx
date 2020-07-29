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
        position: "relative",
        "&:hover": {
            backgroundColor: grey[400],
        },
        "&:hover $handleTarget": {
            display: "block",
        },
        "&:active": {
            backgroundColor: grey[500],
        },
    },
    handleTarget: {
        display: "none",
        position: "absolute",
        top: 0,
        right: "-10px",
        left: "-10px",
        bottom: "-5px",
        zIndex: 100,
        "&:hover": {
            display: "block",
        },
        [theme.breakpoints.down("md")]: {
            right: "-20px",
            left: "-20px",
            bottom: "-20px",
            display: "block",
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    overflowHidden: {
        overflow: "hidden",
    },
    button: {
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.08)",
        },
        "&:active": {
            backgroundColor: "rgba(0,0,0,0.1)",
        },
    },
    dense: {
        padding: "1px",
    },
    root: {
        display: "inline-block",
        userSelect: "none",
    }
}));