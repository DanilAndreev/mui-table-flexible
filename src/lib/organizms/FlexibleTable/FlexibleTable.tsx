import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";

export default function FlexibleTable(props: any) {
    const {
        head,
        columns,
//        children,
    } = props;
    const childrenArray = props.children && Array.isArray(props.children) ? props.children : [props.children];

    const classes = useStyles();
    /**
     * sizes - object, created to store each column width.
     * @type object
     */
    const [sizes, setSizes] = React.useState<any>({});

    const container = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        const newSizes: any = {};
        try {
            for (const column of columns) {
                newSizes[column.props.name] = column.props.defaultWidth;
            }
        } catch (error) {
            console.error("FlexibleTable: table can not contain zero columns!")
        } finally {
            setSizes(newSizes);
        }

    }, []);

    // const width = Object.keys(sizes).reduce((total, current) => total + (sizes[current] || 100), 0);


    return (
        <div className={classes.root} ref={container}>
            <div className={classes.tableContainer}>
                <div className={classes.head}>
                    <div className={classes.row}>
                        {columns && columns.map((column: any) => {
                            let newProps: any = {};
                            try {
                                newProps = {
                                    onSystemResize: (name: string, width: number) => {
                                        setSizes((prev: any) => ({...prev, [name]: width}))
                                    },
                                    systemWidth: sizes[column.props.name],
                                    key: `${column.props.name}-column`,
                                    systemContainer: container,
                                }
                            } catch (error) {
                                console.error("FlexibleTable: unexpected column: ", column, error);
                            } finally {
                                return React.cloneElement(column, newProps);
                            }
                        })}
                    </div>
                </div>
                <div>
                    {childrenArray && childrenArray.map((row: any, index: number) => {
                        let newProps: any = {};
                        if (false) { //TODO: add check for instance of FlexibleTableRow!
                            return null;
                        }
                        try {
                            newProps = {
                                systemSizes: sizes,
                                key: `flexible-table-row-${index}`,
                            }
                        } catch (error) {
                            console.error("FlexibleTable: unexpected child: ", row, error);
                        } finally {
                            return React.cloneElement(row, newProps);
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

FlexibleTable.propTypes = {
    /**
     * head - jsx components to be pasted in table head.
     */
    head: PropTypes.element,
    /**
     * columns - array of elements to configure table layout.
     */
    columns: PropTypes.arrayOf(PropTypes.element),
}