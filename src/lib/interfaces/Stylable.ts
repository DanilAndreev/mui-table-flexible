/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

export interface Stylable {
    /**
     * style - styles of component
     * @type object
     */
    style?: any,
    /**
     * classes - user defined object with classes.
     * @type object
     * @see For more information see [MaterialUI classes overriding](https://material-ui.com/customization/components/#overriding-styles-with-classes)
     */
    classes?: any,
    /**
     * className - element class name
     * @type string
     */
    className?: string,
}
