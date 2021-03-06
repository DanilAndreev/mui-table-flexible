/*
 * Author: Danil Andrieiev | danssg08@gmail.com |  https://github.com/DanilAndreev
 *  Copyright (c) 2020.
 */

import React from "react";
import FlexibleTableAutomated from "./FlexibleTableAutomated";
import FlexibleTableContained from "./FlexibleTableContained";
import FlexibleTableControlled from "./FlexibleTableControlled";

export default function Example() {
    return (
        <>
            <FlexibleTableAutomated/>
            <FlexibleTableContained />
            <FlexibleTableControlled />
        </>
    );
}