/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";
import {ButtonClickable, Stylable} from "../../interfaces";

export interface FlexibleTableRowProps
    extends ButtonClickable, Stylable {
    /**
     * The content of element
     * @type: node
     */
    children?: any,
    /**
     * resizeable - if true - each cell in row will have resize handlers
     * @ignore
     */
    resizeable?: boolean
}

export default function FlexibleTableRow(props: FlexibleTableRowProps) {
    const {
        button = false,
        onClick,
        onDoubleClick,
        children,
        resizeable,
    } = props;
    const classes = {...useStyles(), ...props.classes};

    return (
        <div
            className={clsx(
                classes.root,
                props.className,
                button && classes.button,
            )}
            style={props.style}
            onClick={onClick}
            onDoubleClick={onDoubleClick}
        >
            {!resizeable ? children : children.map((cell: any) =>
                React.cloneElement(cell, {resizeable}))
            }
        </div>
    );
}
