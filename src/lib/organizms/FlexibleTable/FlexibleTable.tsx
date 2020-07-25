/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

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
    /**
     * children - children of the component.
     * @type any
     */
    children?: any,
}

export default function FlexibleTable(props: FlexibleTableProps) {
    const classes = useStyles();
    const {
        head,
        columns,
        children,
    } = props;
    /**
     * sizes - object, created to store each column width.
     * @type object
     */
    const [sizes, setSizes] = React.useState<any>({});

    /**
     * container - ref to main table container
     * @type RefObject<HTMLDivElement>
     */
    const container: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
    /**
     * container - ref to inner position absolute table container
     * @type React.RefObject<HTMLDivElement>
     */
    const absoluteContainer: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

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

    //const tableHeight = children.reduce((current: any, memory: number) => memory + current., 0);
    console.log(absoluteContainer);

    return (
        <div className={classes.root} ref={container}>
            <FlexibleTableContext.Provider value={{getResizeData}}>
                <div className={classes.tableContainer} ref={absoluteContainer}>
                    <div className={classes.head}>
                        <FlexibleTableRow resizeable={true}>
                            {columns}
                        </FlexibleTableRow>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </FlexibleTableContext.Provider>
        </div>
    );
}

export const useResizeData = () => React.useContext(FlexibleTableContext);