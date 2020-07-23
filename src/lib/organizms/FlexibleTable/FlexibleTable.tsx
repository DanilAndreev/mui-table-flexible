import React from "react";
import {useStyles} from "./styles";
import FlexibleTableRow from "../../moleculas/FlexibleTableRow";
import {ResizeData} from "../../interfaces/ResizeData";

export interface FlexibleContext {
    /**
     * getResizeData - function, designed to get container data for resize automation.
     * @param {string} name
     */
    getResizeData(name: string): ResizeData;
}

const FlexibleTableContext = React.createContext<FlexibleContext>({
    getResizeData: (name: string) => ({systemWidth: 0}),
});

export type FlexibleTableProps = {
    /**
     * head - jsx components to be pasted in table head.
     * @type {React.Component}
     */
    head?: any,
    /**
     * columns - array of elements to configure table layout.
     * @type {array}
     */
    columns: any[], //TODO: change to component type
    children?: any,
}

export default function FlexibleTable(props: FlexibleTableProps) {
    const {
        head,
        columns,
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

    function onSystemResize(name: string, width: number): void {
        setSizes((prev: any) => ({...prev, [name]: width}));
    }

    function getResizeData(name: string): ResizeData {
        return {
            systemWidth: sizes[name],
            systemContainer: container,
            onSystemResize,
        };
    }

    // const width = Object.keys(sizes).reduce((total, current) => total + (sizes[current] || 100), 0);

    return (
        <div className={classes.root} ref={container}>
            <FlexibleTableContext.Provider value={{getResizeData}}>
                <div className={classes.tableContainer}>
                    <div className={classes.head}>
                        <FlexibleTableRow
                            // onSystemResize={onSystemResize}
                            // systemSizes={sizes}
                            // systemContainer={container}
                        >
                            {/*{columns.map((column: any, index: number) => {*/}
                            {/*    return React.cloneElement(column, {key: `flexible-table-column-${index}`});*/}
                            {/*})}*/}
                            {columns}
                        </FlexibleTableRow>
                    </div>
                    <div>
                        {/*{childrenArray && childrenArray.map((row: any, index: number) => {*/}
                        {/*    let newProps: any = {};*/}
                        {/*    if (row?.type !== FlexibleTableRow) {*/}
                        {/*        return null;*/}
                        {/*    }*/}
                        {/*    try {*/}
                        {/*        newProps = {*/}
                        {/*            systemSizes: sizes,*/}
                        {/*            key: `flexible-table-row-${index}`,*/}
                        {/*        }*/}
                        {/*    } catch (error) {*/}
                        {/*        console.error("FlexibleTable: unexpected child: ", row, error);*/}
                        {/*    } finally {*/}
                        {/*        return React.cloneElement(row, newProps);*/}
                        {/*    }*/}
                        {/*})}*/}
                        {props.children}
                    </div>
                </div>
            </FlexibleTableContext.Provider>
        </div>
    );
}

export const useResizeData = () => React.useContext(FlexibleTableContext);