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
    /**
     * resizeable - if true - each cell in row will have resize handlers
     */
    resizeable?: boolean
}

export default function FlexibleTableRow(props: FlexibleTableRowProps) {
    const {
        button = false,
        children,
        resizeable,
    } = props;
    const classes = useStyles();

    return (
        <div
            className={clsx(
                classes.root,
                button && classes.button,
            )}
        >
            {!resizeable ? children : children.map((cell: any) =>
                React.cloneElement(cell, {resizeable}))
            }
        </div>
    );
}
