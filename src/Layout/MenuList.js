/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import React from "react";
import {useChangeRoute} from "routing-manager";
import SettingsIcon from '@material-ui/icons/Settings';
import clsx from "clsx";
import {useStyles} from "./styles";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import GetAppIcon from '@material-ui/icons/GetApp';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DnsIcon from '@material-ui/icons/Dns';

export default function MenuList() {
    const {changeRoute, getRouteParams} = useChangeRoute();
    const {page} = getRouteParams();
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState({
        componentApi: true,
        demos: true,
        gettingStarted: true,
    });

    const changeExpanded = (name, event) => {
        setExpanded({...expanded, [name]: !expanded[name]});
    }

    return (
        <React.Fragment>
            <List>
                <ListItem
                    button
                    onClick={event => changeExpanded('gettingStarted', event)}
                >
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    <ListItemText primary={'GettingStarted'}/>
                    {expanded.gettingStarted ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={expanded.gettingStarted} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}
                                  onClick={event => changeRoute({page: 'getting-started'})}
                        >
                            <ListItemIcon>
                                <GetAppIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Installation"/>
                        </ListItem>
                        <ListItem button className={classes.nested}
                                  onClick={event => changeRoute({page: 'example-project'})}
                        >
                            <ListItemIcon>
                                <AccountTreeIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Example project"/>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem
                    button
                    onClick={event => changeExpanded('demos', event)}
                >
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    <ListItemText primary={'Demos'}/>
                    {expanded.demos ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={expanded.demos} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}
                                  onClick={event => changeRoute({page: 'flexible-tables-demo'})}
                        >
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="FlexibleTables"/>
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem
                    button
                    className={clsx(page === 'home' && classes.pageActive)}
                    onClick={event => changeExpanded('componentApi', event)}
                >
                    <ListItemIcon><SettingsIcon/></ListItemIcon>
                    <ListItemText primary={'Component API'}/>
                    {expanded.componentApi ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={expanded.componentApi} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}
                                  onClick={event => changeRoute({page: 'flexible-table-api'})}
                        >
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary="FlexibleTable API"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>

            <Divider/>

            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}