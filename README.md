# mui-table-flexible
#### General
[![npm version](https://badge.fury.io/js/%40danilandreev%2Fmui-table-flexible.svg)](https://badge.fury.io/js/%40danilandreev%2Fmui-table-flexible)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/danilandreev/mui-table-flexible/publish-npm)
![David](https://img.shields.io/david/danilandreev/mui-table-flexible)
![npm (scoped)](https://img.shields.io/npm/v/@danilandreev/mui-table-flexible)
![GitHub issues](https://img.shields.io/github/issues/danilandreev/mui-table-flexible)
![GitHub pull requests](https://img.shields.io/github/issues-pr/danilandreev/mui-table-flexible)
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