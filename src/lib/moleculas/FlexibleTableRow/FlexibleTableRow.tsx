import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";

export default function FlexibleTableRow(props: any) {
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
    } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children.map((cell: any) => {
                let newProps: any = {};
                if (false) { //TODO: add check for instance of FlexibleTableCell!
                    return null;
                }
                try {
                    newProps = {
                        systemWidth: systemSizes[cell.props.name],
                        systemContainer: systemContainer || null,
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

}