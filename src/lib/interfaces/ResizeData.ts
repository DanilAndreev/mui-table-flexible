/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import {SystemResizeable} from "./SystemResizeable";

export interface ResizeData
    extends SystemResizeable{
    /**
     * systemWidth - thi width of the component, stored in table
     * @type number
     */
    systemWidth: number,
}
