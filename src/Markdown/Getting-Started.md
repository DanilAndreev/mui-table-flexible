# Getting started
## Installation
### Install MuiTableFlexible, a flexible table processor.
MuiTableFlexible is available as an npm package.  
### npm
To install and save in your ```package.json``` dependencies, run:
```
// with npm
npm install @danilandreev/mui-table-flexible

// with yarn
yarn add @danilandreev/mui-table-flexible
```

### Additional
You can use __MuiTableFlexible__ with __Material-UI__, the world's most popular React UI framework.
> ```
> // with npm
> npm install @material-ui/core
>
> // with yarn
> yarn add @material-ui/core
> ```

More about [__Material-UI__ installation](https://material-ui.com/getting-started/installation/)

## Usage
### Quick start
Here's a quick example to get you started, __it's literally all you need__:
```jsx
import React from "react";
import {
    FlexibleTable, 
    FlexibleTableCell, 
    FlexibleTableRow
} from "@danilandreev/mui-table-flexible";


export default function FlexibleTableExample() {
    const columns = [
        <FlexibleTableCell name={'hello'} key={'table-col-hello'}>Hello</FlexibleTableCell>,
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
## Documentation
You can learn more reading [documentation](/DanilAndreev/mui-table-flexible/wiki#documentation).
## Example project
Example project available on [this page](https://github.com/DanilAndreev/mui-table-flexible/tree/master/src/example).