export interface SystemResizeable {
    /**
     * systemContainer - ref to element, which has scroll and contains table
     * @type React.MutableRefObject<HTMLDivElement>
     * @ignore
     */
    systemContainer?: any,
    /**
     * onSystemResize - function, called when custom onResize not defined. Used with native FlexibleTable.
     * @param {string} name column name
     * @param {number} width width in pixels
     * @param {number} mouseX previous mouse position
     * @ignore
     */
    onSystemResize?(name: string, width?: number): void,
}
