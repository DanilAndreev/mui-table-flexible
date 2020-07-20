import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";

export type FlexibleTableCellProps = {
    /**
     * name - the name of the columns, used as key.
     * @type: {string}
     */
    name: string,
    /**
     * style - styles of component
     * @type: {object}
     */
    style?: any,
    /**
     * classes - user defined object with classes.
     * @type: {object}
     * @see For more information see [MaterialUI classes overriding](https://material-ui.com/customization/components/#overriding-styles-with-classes)
     */
    classes?: any,
    /**
     * default width - the initial width of cell
     * @type {number}
     */
    defaultWidth?: number,
    /**
     * width - width of the cell, if you want control it by yourself.
     * @type: {number}
     */
    width?: number,
    /**
     * onSystemResize - function, called when cell resizes. If not defined - FlexibleTable will provide this information.
     * @param {string} name column name
     * @param {number} width width in pixels
     */
    onResize?(name: string, width: number): void,
    /**
     * button - if true, row will be clickable.
     * @type: {boolean}
     */
    button?: boolean,
    /**
     * onClick - callback, called on click event.
     * @param {Event} event
     */
    onClick?(event: Object): void,
    /**
     * onDoubleClick - callback, called on double click event.
     * @param {Event} event
     */
    onDoubleClick?(event: Object): void,
    /**
     * onSystemResize - function, called when custom onResize not defined. Used with native FlexibleTable.
     * @param {string} name column name
     * @param {number} width width in pixels
     * @ignore
     */
    onSystemResize?(name: string, width: number): void,
    /**
     * systemWidth - width, controlled by native FlexibleTable.
     * @type {number}
     * @ignore
     */
    systemWidth?: number,
    /**
     * systemContainer - ref to element, which has scroll and contains table
     * @type React.MutableRefObject<HTMLDivElement>
     * @ignore
     */
    systemContainer?: any,
    /**
     * The content of element
     * @type: {any}
     */
    children?: any,
}

export default function FlexibleTableCell(props: FlexibleTableCellProps) {
    const classes = {...useStyles(), ...props.classes};
    const {
        defaultWidth = 100,
        width,
        onResize,
        button = false,
        onClick,
        onDoubleClick,
        children,
        name,
        onSystemResize,
        systemWidth,
        systemContainer,
    } = props;
    const [resizeData, setResizeData] = React.useState({
        /**
         * width - width of the column when width or systemWidth not defined.
         */
        width: width || defaultWidth,
    });
    /**
     * mouseX - previous position of mouse on axis X.
     * @type {React.MutableRefObject<number>}
     */
    const mouseX = React.useRef(0);


    React.useEffect(() => {
        return () => removeResizeListeners();
    }, [])

    /**
     * @function
     * handleResizeMouseDown - function, designed to handle mouse down on resize handler.
     * @param event
     */
    function handleResizeMouseDown(event: any) {
        mouseX.current = event.clientX;
        window.addEventListener("mouseup", removeResizeListeners);
        window.addEventListener("mousemove", handleResizeMouseMove);
    }

    /**
     * @function
     * removeResizeListeners - removes listeners for mousemove and mouseup used with column resize mechanism.
     * @param [event]
     */
    function removeResizeListeners() {
        window.removeEventListener("mousemove", handleResizeMouseMove);
        window.removeEventListener("mouseup", removeResizeListeners);
    }

    /**
     * @function
     * handleResizeMouseMove - function, designed to process resizing of the column.
     * @param event
     */
    function handleResizeMouseMove(event: any) {
        const prevWidth = width || resizeData.width;
        const containerScroll = systemContainer.current && systemContainer.current.scrollLeft;
        const newWidth = prevWidth - (mouseX.current - event.clientX)// - containerScroll;

        if (onResize && typeof onResize === "function") {
//            setResizeData(prev => ({...prev, mouseX: event.clientX}));
            mouseX.current = event.clientX;
            onResize(name, newWidth);
        } else if (onSystemResize && typeof onSystemResize === "function") {
//            setResizeData(prev => ({...prev, mouseX: event.clientX}));
            mouseX.current = event.clientX;
            onSystemResize(name, newWidth);
        } else {
            setResizeData(prev => ({width: newWidth, mouseX: event.clientX}));
            mouseX.current = event.clientX;
        }
    }

    mouseX.current && console.log(mouseX.current);

    return (
        <div
            style={{...props.style, width: width || systemWidth || resizeData.width}}
            className={classes.root}
        >
            <div
                className={classes.cellContainer}
                onClick={button ? onClick : undefined}
                onDoubleClick={button ? onDoubleClick : undefined}
            >
                <div className={classes.content}>
                    {systemWidth} {children}
                </div>
                {systemContainer !== null &&
                <div
                    className={classes.handle}
                    onMouseDown={handleResizeMouseDown}
                >
                </div>
                }
            </div>
        </div>
    );
}

FlexibleTableCell.propTypes = {
    align: PropTypes.string,
    classes: PropTypes.object,
    padding: PropTypes.string,
    size: PropTypes.string,
    sortDirection: PropTypes.string,
    variant: PropTypes.string,

    defaultWidth: PropTypes.number,
    width: PropTypes.number,
    onResize: PropTypes.func,
    name: PropTypes.string.isRequired,
}