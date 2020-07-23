import React from "react";
import {FlexibleTableRowProps} from "../../moleculas/FlexibleTableRow/FlexibleTableRow";

export default function withRowResize(Component: any, systemSizes: any, key?: string) {
    return function (props: FlexibleTableRowProps) {
        return <Component {...props} key={key} systemSizes={systemSizes}/>
    }
}