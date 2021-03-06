/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";

//MuiFlexibleTable components
import FlexibleTable from "../lib/organizms/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell";
import FlexibleTableRow from "../lib/moleculas/FlexibleTableRow";

//MaterialUI Components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


export default function FlexibleTableAutomated() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'} key={'automated-table-col-hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'} key={'automated-table-col-darkness'}>darkness</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'} key={'automated-table-col-my'}>my</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'} key={'automated-table-col-old'}>old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'} key={'automated-table-col-friend'}>friend</FlexibleTableCell>,
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box p={2}>
                    <Paper>
                        <Box p={1}>
                            <Typography variant={'h5'}> Flexible table automated </Typography>
                        </Box>
                        <FlexibleTable
                            columns={columns}
                            disableAutoHeight
                            style={{height: '200px'}}
                            dense
                        >
                            <FlexibleTableRow>
                                <FlexibleTableCell name={'hello'} button onClick={() => alert('I\'ve clicked')}>I've</FlexibleTableCell>
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
                </Box>
            </Grid>
        </Grid>
    );
}