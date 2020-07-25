/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

export interface ButtonClickable {
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
}
