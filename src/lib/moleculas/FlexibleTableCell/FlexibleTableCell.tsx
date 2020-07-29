/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import {ButtonClickable, Resizeable, Stylable, ComponentBase} from "../../interfaces";
import {useResizeData} from "../../organizms/FlexibleTable/FlexibleTable";
import clsx from "clsx";
import {instanceOf} from "prop-types";

/**
 * MIN_CELL_WIDTH - minimal resizeable width of cell in pixels
 * @type: number
 */
const MIN_CELL_WIDTH: number = 40;

export interface FlexibleTableCellProps
    extends Resizeable, ButtonClickable, Stylable, ComponentBase {
    /**
     * name - the name of the columns, used as key.
     * @type string
     */
    name: string,
    /**
     * default width - the initial width of cell
     * @type {number}
     */
    defaultWidth?: number,
    /**
     * disableOverflowHidden - if true, cell will not have overflow: hidden style.
     * @type boolean
     */
    disableOverflowHidden?: boolean,
    /**
     * The content of element
     * @type node
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
        resizeable,
        disableOverflowHidden,
        name,
        ref,
    } = props;
    const {getResizeData, dense} = useResizeData();
    const {onSystemResize, systemWidth} = getResizeData(name);
    const resizeHandle = React.useRef<HTMLDivElement | null>(null);

    interface Settings {
        mouseX: number;
        width: number;
    }

    const [settings, setSettings] = React.useState<Settings | null>(null);

    React.useEffect(() => {
        return () => removeResizeListeners();
    }, [])

    React.useEffect(() => {
        if (resizeHandle.current) {
            resizeHandle.current.addEventListener("touchstart", handleResizeMouseDown, {passive: false});
        }
    }, [resizeHandle])

    React.useEffect(() => {
        if (settings) {
            window.addEventListener("mouseup", removeResizeListeners, {passive: false});
            window.addEventListener("touchend", removeResizeListeners, {passive: false});
            window.addEventListener("touchcancel", removeResizeListeners, {passive: false});
            window.addEventListener("mousemove", handleResizeMouseMove, {passive: false});
            window.addEventListener("touchmove", handleResizeMouseMove, {passive: false});
        } else {
            window.removeEventListener("mousemove", handleResizeMouseMove);
            window.removeEventListener("touchmove", handleResizeMouseMove);
            window.removeEventListener("mouseup", removeResizeListeners);
            window.removeEventListener("touchend", removeResizeListeners);
            window.removeEventListener("touchcancel", removeResizeListeners);
        }
    }, [settings]);

    /**
     * @function
     * handleResizeMouseDown - function, designed to handle mouse down on resize handler.
     * @param event
     */
    function handleResizeMouseDown(event: any) {
        event.preventDefault();
        event.stopPropagation();
        let clientX = event.clientX;
        if (event instanceof TouchEvent || event.nativeEvent instanceof TouchEvent) {
            clientX = +event.touches[0].clientX;
        }

        setSettings({
            width: width || systemWidth || defaultWidth,
            mouseX: clientX,
        });
    }

    /**
     * @function
     * removeResizeListeners - removes listeners for mousemove and mouseup used with column resize mechanism.
     * @param [event]
     */
    function removeResizeListeners() {
        setSettings(null);
        window.removeEventListener("mousemove", handleResizeMouseMove);
        window.removeEventListener("touchmove", handleResizeMouseMove);
        window.removeEventListener("mouseup", removeResizeListeners);
        window.removeEventListener("touchend", removeResizeListeners);
        window.removeEventListener("touchcancel", removeResizeListeners);
    }

    /**
     * @function
     * handleResizeMouseMove - function, designed to process resizing of the column.
     * @param event
     */
    function handleResizeMouseMove(event: any) {
        try {
            event.stopPropagation();
            event.preventDefault();
        } catch (error) {
        }
        if (!settings) return null;

        let clientX = event.clientX;
        if (event instanceof TouchEvent || event.nativeEvent instanceof TouchEvent) {
            clientX = +event.touches[0].clientX;
        }
        let newWidth: number = settings.width - (settings.mouseX - (clientX));
        if (newWidth < MIN_CELL_WIDTH) {
            newWidth = MIN_CELL_WIDTH;
        }

        if (onResize && typeof onResize === "function") {
            onResize(name, newWidth);
        } else if (onSystemResize && typeof onSystemResize === "function") {
            onSystemResize(name, newWidth);
        }
    }

    return (
        <div
            style={{...props.style, width: width || systemWidth}}
            className={clsx(classes.root, props.className)}
            ref={ref}
        >
            <div
                className={clsx(classes.cellContainer, button && classes.button)}
                onClick={button ? onClick : undefined}
                onDoubleClick={button ? onDoubleClick : undefined}
            >
                <div
                    className={clsx(
                        classes.content,
                        !disableOverflowHidden && classes.overflowHidden,
                        dense && classes.dense,
                    )}
                >
                    {children}
                </div>
                {resizeable &&
                <div
                    className={classes.handle}
                    onMouseDown={handleResizeMouseDown}
                    //onTouchStart={handleResizeMouseDown}
                    ref={resizeHandle}
                >
                    <div className={classes.handleTarget}/>
                </div>
                }
            </div>
        </div>
    );
}
