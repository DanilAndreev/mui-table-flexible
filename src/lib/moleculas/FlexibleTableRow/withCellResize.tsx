import React from "react";

export default function withExtraProps(Component: any, extraProps: any) {
    return function(props: any) {
        return <Component {...props} {...extraProps}/>;
    }
}