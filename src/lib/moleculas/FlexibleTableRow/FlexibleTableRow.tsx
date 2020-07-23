import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import {ButtonClickable} from "../../interfaces";

export interface FlexibleTableRowProps
    extends ButtonClickable {
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
