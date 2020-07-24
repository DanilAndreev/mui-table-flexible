import React from "react";
import FlexibleTable from "../lib/organizms/FlexibleTable/FlexibleTable";
import FlexibleTableCell from "../lib/moleculas/FlexibleTableCell/FlexibleTableCell";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FlexibleTableRow from "../lib/moleculas/FlexibleTableRow/FlexibleTableRow";

export default function Example() {
    const columns = [
        <FlexibleTableCell defaultWidth={150} name={'hello'}>Hello</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={250} name={'darkness'}>Darkness <br/> s </FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={210} name={'my'}>My</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={440} name={'old'}>Old</FlexibleTableCell>,
        <FlexibleTableCell defaultWidth={230} name={'friend'}>Friend</FlexibleTableCell>,
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <FlexibleTable
                        columns={columns}
                    >
                        <FlexibleTableRow>
                            <FlexibleTableCell name={'hello'}>Hello 1</FlexibleTableCell>
                            <FlexibleTableCell name={'darkness'}>Darkness 1 </FlexibleTableCell>
                            <FlexibleTableCell name={'my'}>My 1</FlexibleTableCell>
                            <FlexibleTableCell name={'old'}>Old 1</FlexibleTableCell>
                            <FlexibleTableCell name={'friend'}>Friend 1</FlexibleTableCell>
                        </FlexibleTableRow>
                        <FlexibleTableRow button>
                            <FlexibleTableCell name={'hello'}>Hello 2</FlexibleTableCell>
                            <FlexibleTableCell name={'darkness'}>Darkness 2 </FlexibleTableCell>
                            <FlexibleTableCell name={'my'}>My 2</FlexibleTableCell>
                            <FlexibleTableCell name={'old'}>Old 2</FlexibleTableCell>
                            <FlexibleTableCell name={'friend'}>Friend 2</FlexibleTableCell>
                        </FlexibleTableRow>
                        <FlexibleTableRow button>
                            <FlexibleTableCell name={'hello'}>Hello 3</FlexibleTableCell>
                            <FlexibleTableCell name={'darkness'} style={{backgroundColor: `#f00`}}>Darkness 3 <br/> lol <br/> kek</FlexibleTableCell>
                            <FlexibleTableCell name={'my'}>My 3</FlexibleTableCell>
                            <FlexibleTableCell name={'old'} style={{backgroundColor: `#0f0`}}>Old 3</FlexibleTableCell>
                            <FlexibleTableCell name={'friend'}>
                                <FlexibleTable
                                    columns={columns}
                                >
                                    <FlexibleTableRow>
                                        <FlexibleTableCell name={'hello'}>Hello 1</FlexibleTableCell>
                                        <FlexibleTableCell name={'darkness'}>Darkness 1 </FlexibleTableCell>
                                        <FlexibleTableCell name={'my'}>My 1</FlexibleTableCell>
                                        <FlexibleTableCell name={'old'}>Old 1</FlexibleTableCell>
                                        <FlexibleTableCell name={'friend'}>Friend 1</FlexibleTableCell>
                                    </FlexibleTableRow>
                                    <FlexibleTableRow button>
                                        <FlexibleTableCell name={'hello'}>Hello 2</FlexibleTableCell>
                                        <FlexibleTableCell name={'darkness'}>Darkness 2 </FlexibleTableCell>
                                        <FlexibleTableCell name={'my'}>My 2</FlexibleTableCell>
                                        <FlexibleTableCell name={'old'}>Old 2</FlexibleTableCell>
                                        <FlexibleTableCell name={'friend'}>Friend 2</FlexibleTableCell>
                                    </FlexibleTableRow>
                                    <FlexibleTableRow button>
                                        <FlexibleTableCell name={'hello'}>Hello 3</FlexibleTableCell>
                                        <FlexibleTableCell name={'darkness'} style={{backgroundColor: `#f00`}}>Darkness 3 <br/> lol <br/> kek</FlexibleTableCell>
                                        <FlexibleTableCell name={'my'}>My 3</FlexibleTableCell>
                                        <FlexibleTableCell name={'old'} style={{backgroundColor: `#0f0`}}>Old 3</FlexibleTableCell>
                                        <FlexibleTableCell name={'friend'}>Friend 3</FlexibleTableCell>
                                    </FlexibleTableRow>
                                </FlexibleTable>
                            </FlexibleTableCell>
                        </FlexibleTableRow>
                    </FlexibleTable>
                </Paper>
            </Grid>
        </Grid>
    );
}