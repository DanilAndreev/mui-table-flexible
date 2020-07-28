# mui-table-flexible
## Overview
__mui-table-flexible__ - table processor, designed to create tables with resize handlers for big amount of data.  
![flexible table example](https://github.com/DanilAndreev/mui-table-flexible/blob/master/media/mui-table-flexible-example-simple.png)

## Getting started
### Installation
Using __npm__: 
```
npm install mui-table-flexible
```  
Using __yarn__: 
```
yarn add mui-table-flexible
```
### Usage
```jsx
import React from "react";
import {
    FlexibleTable, 
    FlexibleTableCell, 
    FlexibleTableRow
} from "@danilandreev/mui-table-flexible";


export default function FlexibleTableExample() {
    const columns = [
        <FlexibleTableCell name={'hello'}>Hello</FlexibleTableCell>,
        //  ...
    ];

    return (
        <FlexibleTable
            columns={columns}
        >
            <FlexibleTableRow>
                <FlexibleTableCell name={'hello'}>I've</FlexibleTableCell>
                 {/*...*/}
            </FlexibleTableRow>
            <FlexibleTableRow>
                <FlexibleTableCell name={'hello'}>Because</FlexibleTableCell>
                 {/*...*/}
            </FlexibleTableRow>
            <FlexibleTableRow>
                <FlexibleTableCell name={'hello'}>Left</FlexibleTableCell>
                 {/*...*/}
            </FlexibleTableRow>
        </FlexibleTable>
    );
}
```
### Learn
You can find __example project__ in [this repository](https://github.com/DanilAndreev/mui-table-flexible/tree/master/src/example).  
Also, you can find __more info__ in [wiki](https://github.com/DanilAndreev/mui-table-flexible/wiki).

## Author
Danil Andreev | danssg08@gmail.com | https://github.com/DanilAndreev