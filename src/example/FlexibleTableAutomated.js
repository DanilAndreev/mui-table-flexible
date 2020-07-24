import React from "react";
import FlexibleTable from "../lib/organizms/FlexibleTable/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell/FlexibleTableCell";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FlexibleTableRow from "../lib/moleculas/FlexibleTableRow/FlexibleTableRow";
import Box from "@material-ui/core/Box";

export default function FlexibleTableAutomated() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'}>darkness</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'}>my</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'}>old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'}>friend</FlexibleTableCell>,
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Box p={2}>
                    <Paper>
                        <FlexibleTable
                            columns={columns}
                        >
                            <FlexibleTableRow button>
                                <FlexibleTableCell name={'hello'} button onClick={() => alert('Hello')}>I've</FlexibleTableCell>
                                <FlexibleTableCell name={'darkness'}>come</FlexibleTableCell>
                                <FlexibleTableCell name={'my'}>to talk</FlexibleTableCell>
                                <FlexibleTableCell name={'old'}>with you</FlexibleTableCell>
                                <FlexibleTableCell name={'friend'}>again</FlexibleTableCell>
                            </FlexibleTableRow>
                            <FlexibleTableRow button>
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