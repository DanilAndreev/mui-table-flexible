import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";

export default function FlexibleTable(props: any) {
    const {
        head,
        columns,
        children,
    } = props;
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
                    {children && children.map((child: any) => {
                        let newProps: any = {};
                        try {
                            newProps = {
                                systemWidth: sizes[child.props.name],
                                systemContainer: null,
                            }
                        } catch (error) {
                            console.error("FlexibleTable: unexpected child: ", child, error);
                        } finally {
                            return React.cloneElement(child, newProps);
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