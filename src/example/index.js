import React from "react";
import FlexibleTable from "../lib/organizms/FlexibleTable/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell/FlexibleTableCell";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Example() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={200} name={'darkness'}>Darkness <br/> s </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'}>My</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={140} name={'old'}>Old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={120} name={'friend'}>Friend</FlexibleTableCell>,
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <FlexibleTable
                        columns={columns}
                    >
                        <FlexibleTableCell name={'hello'}>Hello 1</FlexibleTableCell>
                        <FlexibleTableCell name={'darkness'}>Darkness 1 </FlexibleTableCell>
                        <FlexibleTableCell name={'my'}>My 1</FlexibleTableCell>
                        <FlexibleTableCell name={'old'}>Old 1</FlexibleTableCell>
                        <FlexibleTableCell name={'friend'}>Friend 1</FlexibleTableCell>
                    </FlexibleTable>
                </Paper>
            </Grid>
        </Grid>
    );
}