import React from "react";
import {useStyles} from "./styles";
import FlexibleTableCell from "../FlexibleTableCell/index";
import clsx from "clsx";
import {ButtonClickable, SystemResizeable} from "../../interfaces";

export interface FlexibleTableRowProps
    extends SystemResizeable, ButtonClickable {
    /**
     * systemSizes - object with width information, controlled by native FlexibleTable.
     * @type {object}
     * @ignore
     */
    systemSizes?: any,
    /**
     * The content of element
     * @type: {any}
     */
    children?: any,
}

export default function FlexibleTableRow(props: FlexibleTableRowProps) {
    const {
        button = false,
        children,
    } = props;
    const classes = useStyles();

    return (
        <div
            className={clsx(
                classes.root,
                button && classes.button,
            )}
        >
            {children}
        </div>
    );
}
