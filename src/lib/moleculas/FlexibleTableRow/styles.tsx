/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: `1px solid ${grey[300]}`,
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "stretch",
    },
    button: {
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.08)",
        },
        "&:active": {
            backgroundColor: "rgba(0,0,0,0.1)",
        },
    },
}));