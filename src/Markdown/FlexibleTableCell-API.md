# FlexibleTableCell API
### The API documentation of the FlexibleTableCell React component. Learn more about the props and the CSS customization points.

## Import
```jsx
import {FlexibleTableCell} from "@danilandreev/mui-table-flexible";
// or
import FlexibleTableCell from "@danilandreev/mui-table-flexible/dist/moleculas/FlexibleTableCell";
```
You can learn more about the difference by [reading this guide](https://material-ui.com/guides/minimizing-bundle-size/).
## Props
| Name                  | Type     | Default | Description                                                                                       |
|-----------------------|----------|---------|---------------------------------------------------------------------------------------------------|
| name                  | string   |         | the name of the columns, used as key.                                                             |
| defaultWidth          | number   |         | the initial width of cell                                                                         |
| disableOverflowHidden | boolean  |         | if true, cell will not have overflow: hidden style.                                               |
| children              | node     |         | The content of element                                                                            |
| button                | boolean  | false   | if true, row will be clickable.                                                                   |
| onClick               | function |         | callback, called on click event.                                                                  |
| onDoubleClick         | function |         | callback, called on double click event.                                                           |
| width                 | number   |         | width of the cell, if you want control it by yourself.                                            |
| onResize              | function |         | function, called when cell resizes. If not defined - FlexibleTable will provide this information. |

The __ref__ is forwarded to the root element.

Any other props supplied will be provided to the root element (native element).

## CSS
| Rule name     | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| root          | Styles applied to the root element.                                     |
| dense         | Styles applied to the content element when prop _dense_ is true.        |
| button        | Styles applied to the cellContainer element when prop _button_ is true. |
| content       | Styles applied to the content element.                                  |
| cellContainer | Styles applied to the cellContainer element.                            |
| handle        | Styles applied to the handle element.                                   |

You can override the style of the component thanks to one of these customization points:
* With a rule name of the [__classes__ object prop](https://material-ui.com/customization/components/#overriding-styles-with-classes).
* With a [global class name](https://material-ui.com/customization/components/#overriding-styles-with-global-class-names).

If that's not sufficient, you can check the [implementation of the component](https://github.com/DanilAndreev/mui-table-flexible/blob/master/src/lib/organizms/FlexibleTable/FlexibleTable.tsx) for more detail.
## Demos
* [FlexibleTable](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable)