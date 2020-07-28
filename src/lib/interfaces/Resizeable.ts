/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

export interface Resizeable {
    /**
     * width - width of the cell, if you want control it by yourself.
     * @type number
     */
    width?: number,
    /**
     * onSystemResize - function, called when cell resizes. If not defined - FlexibleTable will provide this information.
     * @param {string} name column name
     * @param {number} width width in pixels
     */
    onResize?(name: string, width: number): void,
    /**
     * resizeable - flag, used to determine draw resize handlers or not.
     * @type boolean
     * @ignore
     */
    resizeable?: boolean,
}
