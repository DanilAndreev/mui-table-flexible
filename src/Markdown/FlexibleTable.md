# FlexibleTable
## Tables display sets of data. Column sizes can be changed dynamically.

## Simple FlexibleTable
> A simple example

![MUITableFlexible example simple image](https://github.com/DanilAndreev/mui-table-flexible/blob/master/media/mui-table-flexible-example-simple.png)
```jsx
import React from "react";
//MuiFlexibleTable components
import FlexibleTable from "../lib/organizms/FlexibleTable/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell/FlexibleTableCell";
import FlexibleTableRow from "../lib/moleculas/FlexibleTableRow/FlexibleTableRow";
//MaterialUI Components
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


export default function FlexibleTableAutomated() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'}>darkness</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'}>my</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'}>old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'}>friend</FlexibleTableCell>,
    ];

    return (
        <Paper>
            <Box p={1}>
                <Typography variant={'h5'}> Flexible table automated </Typography>
            </Box>
            <FlexibleTable
                columns={columns}
            >
                <FlexibleTableRow>
                    <FlexibleTableCell name={'hello'} button
                                       onClick={() => alert('I\'ve clicked')}>I've</FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>come</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>to talk</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>with you</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>again</FlexibleTableCell>
                </FlexibleTableRow>
                <FlexibleTableRow button onDoubleClick={() => alert('Line double clicked')}>
                    <FlexibleTableCell name={'hello'}>Because </FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>a</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>vision</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>softly</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>creeping</FlexibleTableCell>
                </FlexibleTableRow>
                <FlexibleTableRow button>
                    <FlexibleTableCell name={'hello'}>Left</FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>its seeds</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>while</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>I was</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>sleeping</FlexibleTableCell>
                </FlexibleTableRow>
            </FlexibleTable>
        </Paper>
    );
}
```

## Dense FlexibleTable
> A dense table

![MUITableFlexible example dense image](https://github.com/DanilAndreev/mui-table-flexible/blob/master/media/mui-table-flexible-example-dense.png)
```jsx
import React from "react";
//MuiFlexibleTable components
import FlexibleTable from "../lib/organizms/FlexibleTable/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell/FlexibleTableCell";
import FlexibleTableRow from "../lib/moleculas/FlexibleTableRow/FlexibleTableRow";
//MaterialUI Components
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


export default function FlexibleTableAutomated() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'}>darkness</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'}>my</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'}>old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'}>friend</FlexibleTableCell>,
    ];

    return (
        <Paper>
            <Box p={1}>
                <Typography variant={'h5'}> Flexible table automated </Typography>
            </Box>
            <FlexibleTable
                columns={columns}
                dense
            >
                <FlexibleTableRow>
                    <FlexibleTableCell name={'hello'} button
                                       onClick={() => alert('I\'ve clicked')}>I've</FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>come</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>to talk</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>with you</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>again</FlexibleTableCell>
                </FlexibleTableRow>
                <FlexibleTableRow button onDoubleClick={() => alert('Line double clicked')}>
                    <FlexibleTableCell name={'hello'}>Because </FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>a</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>vision</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>softly</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>creeping</FlexibleTableCell>
                </FlexibleTableRow>
                <FlexibleTableRow button>
                    <FlexibleTableCell name={'hello'}>Left</FlexibleTableCell>
                    <FlexibleTableCell name={'darkness'}>its seeds</FlexibleTableCell>
                    <FlexibleTableCell name={'my'}>while</FlexibleTableCell>
                    <FlexibleTableCell name={'old'}>I was</FlexibleTableCell>
                    <FlexibleTableCell name={'friend'}>sleeping</FlexibleTableCell>
                </FlexibleTableRow>
            </FlexibleTable>
        </Paper>
    );
}
```

## API
* [```<FlexibleTable />```](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable-API)
* [```<FlexibleTableRow />```](/DanilAndreev/mui-table-flexible/wiki/FlexibleTableRow-API)
* [```<FlexibleTableCell />```](/DanilAndreev/mui-table-flexible/wiki/FlexibleTableCell-API)
