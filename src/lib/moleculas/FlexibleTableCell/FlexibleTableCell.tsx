import React from "react";
import {useStyles} from "./styles";
import {Resizeable, SystemResizeable, ButtonClickable, Stylable} from "../../interfaces";
import {useResizeData} from "../../organizms/FlexibleTable/FlexibleTable";


export interface FlexibleTableCellProps
    extends Resizeable, ButtonClickable, Stylable {
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
    // systemWidth?: number,
    // /**
    //  * Last position of mouse on axis X
    //  * @type {number}
    //  */
    mouseX?: number,
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
        // onSystemResize,
        // systemWidth,
        // systemContainer,
    } = props;
    const {getResizeData} = useResizeData();
    const {onSystemResize, systemWidth,systemContainer} = getResizeData(name);
    const [resizeData, setResizeData] = React.useState({
        /**
         * width - width of the column when width or systemWidth not defined.
         */
        width: width || defaultWidth,
    });
    interface Settings { //TODO: change to ref state
        mouseX: number;
        width: number;
    }
    const [settings, setSettings] = React.useState<Settings | null>(null);

    React.useEffect(() => {
        return () => {
            window.removeEventListener("mousemove", handleResizeMouseMove);
            window.removeEventListener("mouseup", removeResizeListeners);
        };
    }, [])

    React.useEffect(() => {
        console.log(settings);
        if (settings) {
            window.addEventListener("mouseup", removeResizeListeners);
            window.addEventListener("mousemove", handleResizeMouseMove);
        } else {
            window.removeEventListener("mousemove", handleResizeMouseMove);
            window.removeEventListener("mouseup", removeResizeListeners);
        }
    }, [settings]);

    /**
     * @function
     * handleResizeMouseDown - function, designed to handle mouse down on resize handler.
     * @param event
     */
    function handleResizeMouseDown(event: any) {
        console.log('kuku');
        setSettings({
            width: width || defaultWidth,
            mouseX: +event.clientX
        });
    }

    /**
     * @function
     * removeResizeListeners - removes listeners for mousemove and mouseup used with column resize mechanism.
     * @param [event]
     */
    function removeResizeListeners() {
        setSettings(null);
    }

    /**
     * @function
     * handleResizeMouseMove - function, designed to process resizing of the column.
     * @param event
     */
    function handleResizeMouseMove(event: any) {
        if (!settings) return null;
        console.log('moving, settings', settings);
        const containerScroll = systemContainer.current && systemContainer.current.scrollLeft;
        const newWidth = settings.width - (settings.mouseX - event.clientX);

        if (onResize && typeof onResize === "function") {
            onResize(name, newWidth);
        } else if (onSystemResize && typeof onSystemResize === "function") {
            onSystemResize(name, newWidth);
        }
    }

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
