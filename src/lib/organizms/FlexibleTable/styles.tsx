import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        width: "1700px",
        height: "400px",
        overflowX: "auto",
        position: "relative",
        overflow: "hidden",
    },
    tableContainer: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    row: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "stretch",
    },
    head: {

    },
    body: {

    },
}));