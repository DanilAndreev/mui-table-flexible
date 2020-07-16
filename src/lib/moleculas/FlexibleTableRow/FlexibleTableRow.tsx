import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";
import FlexibleTableCell from "../FlexibleTableCell";

type FlexibleTableRowProps = {
    systemSizes: any,
    systemContainer: any,
    onSystemResize(name: string, width: number): void,
    children: any,
}

export default function FlexibleTableRow(props: FlexibleTableRowProps) {
    const {
        children,
        /**
         * systemSizes - object with width information, controlled by native FlexibleTable.
         * @type {object}
         * @ignore
         */
        systemSizes,
        /**
         * systemContainer - ref to element, which has scroll and contains table
         * @type React.MutableRefObject<> TODO: add type to template
         * @ignore
         */
        systemContainer,
        /**
         * onSystemResize - function, called when custom onResize not defined. Used with native FlexibleTable.
         * @param {string} name column name
         * @param {number} width width in pixels
         * @ignore
         */
        onSystemResize,
    } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
    systemSizes: PropTypes.object,
    systemContainer: PropTypes.any,
    onSystemResize: PropTypes.func,
}