# mui-table-flexible
#### General
[![npm version](https://badge.fury.io/js/%40danilandreev%2Fmui-table-flexible.svg)](https://badge.fury.io/js/%40danilandreev%2Fmui-table-flexible)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/danilandreev/mui-table-flexible/publish-npm)
![npm (scoped)](https://img.shields.io/npm/v/@danilandreev/mui-table-flexible)
![GitHub issues](https://img.shields.io/github/issues/danilandreev/mui-table-flexible)
![GitHub pull requests](https://img.shields.io/github/issues-pr/danilandreev/mui-table-flexible)
#### Dependencies
![David](https://img.shields.io/david/danilandreev/mui-table-flexible)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/danilandreev/mui-table-flexible/@material-ui/core)

#### Social
![GitHub stars](https://img.shields.io/github/stars/danilandreev/mui-table-flexible?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/danilandreev/mui-table-flexible?style=social)
![GitHub forks](https://img.shields.io/github/forks/danilandreev/mui-table-flexible?style=social)
![GitHub followers](https://img.shields.io/github/followers/danilandreev?label=Follow%20me&style=social)
#### Development
![GitHub last commit](https://img.shields.io/github/last-commit/danilandreev/mui-table-flexible)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/DanilAndreev/mui-table-flexible)
![GitHub language count](https://img.shields.io/github/languages/count/danilandreev/mui-table-flexible)
![GitHub top language](https://img.shields.io/github/languages/top/danilandreev/mui-table-flexible)

## Overview
mui-table-flexible - table processor, designed to create tables with resize handlers for big amount of data.
![flexible table example](/DanilAndreev/mui-table-flexible/blob/master/media/mui-table-flexible-example-simple.png)
### Installation 
Install MuiTableFlexible's source files via __npm__ or __yarn__.
```
npm install @danilandreev/mui-table-flexible
```
or  
```
yarn add @danilandreev/mui-table-flexible
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
## Topics
* [Getting started](/DanilAndreev/mui-table-flexible/wiki/Getting-Started)
* [Example project](https://github.com/DanilAndreev/mui-table-flexible/tree/master/src/example)
## Documentation
* __Demos__
  * [FlexibleTable](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable)
* __Component API__
  * [FlexibleTable API](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable-API)
  * [FlexibleTableCell API](/DanilAndreev/mui-table-flexible/wiki/FlexibleTableCell-API)
  * [FlexibleTableRow API](/DanilAndreev/mui-table-flexible/wiki/FlexibleTableRow-API)
