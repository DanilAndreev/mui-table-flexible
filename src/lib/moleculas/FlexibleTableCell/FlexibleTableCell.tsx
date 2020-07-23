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
    } = props;
    const {getResizeData} = useResizeData();
    const {onSystemResize, systemWidth, systemContainer} = getResizeData(name);

    interface Settings { //TODO: change to ref state
        current: {
            mouseX: number;
            width: number;
        } | null,
    }

    const [settings, setSettings] = React.useState<Settings>({current: null});

    React.useEffect(() => {
        return () => removeResizeListeners();
    }, [])

    React.useEffect(() => {
        console.log(settings);
        if (settings?.current) {
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
        setSettings({
            current: {
                width: width || defaultWidth,
                mouseX: +event.clientX
            }
        });
    }

    /**
     * @function
     * removeResizeListeners - removes listeners for mousemove and mouseup used with column resize mechanism.
     * @param [event]
     */
    function removeResizeListeners() {
        setSettings({current: null});
        window.removeEventListener("mousemove", handleResizeMouseMove);
        window.removeEventListener("mouseup", removeResizeListeners);
    }

    /**
     * @function
     * handleResizeMouseMove - function, designed to process resizing of the column.
     * @param event
     */
    function handleResizeMouseMove(event: any) {
        if (!settings.current) return null;
        console.log('moving, settings', settings);
        const containerScroll = systemContainer.current && systemContainer.current.scrollLeft;
        const newWidth = settings.current.width - (settings.current.mouseX - event.clientX);

        if (onResize && typeof onResize === "function") {
            onResize(name, newWidth);
        } else if (onSystemResize && typeof onSystemResize === "function") {
            onSystemResize(name, newWidth);
        }
    }

    return (
        <div
            style={{...props.style, width: width || systemWidth}}
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
