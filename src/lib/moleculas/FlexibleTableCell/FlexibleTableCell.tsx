import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";
import {Resizeable, SystemResizeable, ButtonClickable, Stylable} from "../../interfaces";


export interface FlexibleTableCellProps
    extends Resizeable, SystemResizeable, ButtonClickable, Stylable {
    /**
     * name - the name of the columns, used as key.
     * @type: {string}
     */
    name: string,
    /**
     * default width - the initial width of cell
     * @type {number}
     */
    defaultWidth?: number,
    /**
     * systemWidth - width, controlled by native FlexibleTable.
     * @type {number}
     * @ignore
     */
    systemWidth?: number,
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
            onSystemResize(name, newWidth, event.clientX);
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