import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: `1px solid ${grey[300]}`,
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "stretch",
    }
}));