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


export default function FlexibleTableControlled() {
    const [sizes, setSizes] = React.useState({});

    function onCellResize(name, width) {
        setSizes(last => ({...last, [name]: width}));
    }

    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'} onResize={onCellResize}
                           width={sizes.hello} key={'automated-table-col-hello'}>
            Hello
        </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'} onResize={onCellResize}
                           width={sizes.darkness} key={'automated-table-col-darkness'}>
            darkness
        </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'} onResize={onCellResize}
                           width={sizes.my} key={'automated-table-col-my'}>
            my
        </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'} onResize={onCellResize}
                           width={sizes.old} key={'automated-table-col-old'}>
            old
        </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'} onResize={onCellResize}
                           width={sizes.friend} key={'automated-table-col-friend'}>
            friend
        </FlexibleTableCell>,
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box p={2}>
                    <Paper>
                        <Box p={1}>
                            <Typography variant={'h5'}> Flexible table controlled </Typography>
                        </Box>
                        <FlexibleTable
                            columns={columns}
                        >
                            <FlexibleTableRow>
                                <FlexibleTableCell
                                    name={'hello'} width={sizes.hello}
                                    button onClick={() => alert('I\'ve clicked')}
                                >
                                    I've
                                </FlexibleTableCell>
                                <FlexibleTableCell name={'darkness'} width={sizes.darkness}>come</FlexibleTableCell>
                                <FlexibleTableCell name={'my'} width={sizes.my}>to talk</FlexibleTableCell>
                                <FlexibleTableCell name={'old'} width={sizes.old}>with you</FlexibleTableCell>
                                <FlexibleTableCell name={'friend'} width={sizes.friend}>again</FlexibleTableCell>
                            </FlexibleTableRow>
                            <FlexibleTableRow button onDoubleClick={() => alert('Line double clicked')}>
                                <FlexibleTableCell name={'hello'} width={sizes.hello}>Because </FlexibleTableCell>
                                <FlexibleTableCell name={'darkness'} width={sizes.darkness}>a</FlexibleTableCell>
                                <FlexibleTableCell name={'my'} width={sizes.my}>vision</FlexibleTableCell>
                                <FlexibleTableCell name={'old'} width={sizes.old}>softly</FlexibleTableCell>
                                <FlexibleTableCell name={'friend'} width={sizes.friend}>creeping</FlexibleTableCell>
                            </FlexibleTableRow>
                            <FlexibleTableRow button>
                                <FlexibleTableCell name={'hello'} width={sizes.hello}>Left</FlexibleTableCell>
                                <FlexibleTableCell name={'darkness'} width={sizes.darkness}>its
                                    seeds</FlexibleTableCell>
                                <FlexibleTableCell name={'my'} width={sizes.my}>while</FlexibleTableCell>
                                <FlexibleTableCell name={'old'} width={sizes.old}>I was</FlexibleTableCell>
                                <FlexibleTableCell name={'friend'} width={sizes.friend}>sleeping</FlexibleTableCell>
                            </FlexibleTableRow>
                        </FlexibleTable>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    );
}