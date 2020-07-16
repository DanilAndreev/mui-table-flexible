import React from "react";
import PropTypes from 'prop-types';
import {useStyles} from "./styles";

export default function FlexibleTableCell(props: any) {
    const classes = {...useStyles(), ...props.classes};
    const {
        defaultWidth = 100,
        width,
        onResize,
        children,
        name,
        /**
         * onSystemResize - function, called when custom onResize not defined. Used with native FlexibleTable.
         * @param {string} name column name
         * @param {number} width width in pixels
         * @ignore
         */
        onSystemResize,
        /**
         * systemWidth - width, controlled by native FlexibleTable.
         * @type {number}
         * @ignore
         */
        systemWidth,
        /**
         * systemContainer - ref to element, which has scroll and contains table
         * @type React.MutableRefObject<> TODO: add type to template
         * @ignore
         */
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
        const newWidth = prevWidth - (mouseX.current - event.clientX) - containerScroll;

        if (onResize && typeof onResize === "function") {
            setResizeData(prev => ({...prev, mouseX: event.clientX}));
            onResize(name, newWidth);
        } else if (onSystemResize && typeof onSystemResize === "function") {
            setResizeData(prev => ({...prev, mouseX: event.clientX}));
            onSystemResize(name, newWidth);
        } else {
            setResizeData(prev => ({width: newWidth, mouseX: event.clientX}));
        }
    }

    return (
        <div style={{...props.style, width: width || systemWidth || resizeData.width}} className={classes.root}>
            <div className={classes.cellContainer}>
                <div className={classes.content}>
                    {children}
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