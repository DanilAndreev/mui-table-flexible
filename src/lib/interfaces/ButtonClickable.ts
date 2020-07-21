export default interface ButtonClickable {
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
