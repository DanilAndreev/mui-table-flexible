import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";
import FlexibleTableCell from "../FlexibleTableCell";
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
        systemSizes,
        systemContainer,
        onSystemResize,
    } = props;
    const classes = useStyles();

    return (
        <div
            className={clsx(
                classes.root,
                button && classes.button,
            )}
        >
            {children.map((cell: any) => {
                let newProps: any = {};
                if (cell?.type !== FlexibleTableCell) {
                    console.error("FlexibleTable: unexpected children, all children must be FlexibleTableCell type");
                    return null;
                }
                try {
                    newProps = {
                        systemWidth: systemSizes[cell.props.name],
                        systemContainer: systemContainer || null,
                        onSystemResize: onSystemResize,
                        key: `flexible-table-cell-${cell.props.name}`,
                    }
                } catch (error) {
                    console.error("FlexibleTable: unexpected child: ", cell, error);
                } finally {
                    return React.cloneElement(cell, newProps);
                }
            })}
        </div>
    );
}

FlexibleTableRow.propTypes = {
    button: PropTypes.bool,
    systemSizes: PropTypes.object,
    systemContainer: PropTypes.any,
    onSystemResize: PropTypes.func,
}