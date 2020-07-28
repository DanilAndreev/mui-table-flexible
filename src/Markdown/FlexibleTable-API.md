# FlexibleTable API
### The API documentation of the FlexibleTable React component. Learn more about the props and the CSS customization points.

## Import
```jsx
import {FlexibleTable} from "@danilandreev/mui-table-flexible";
//or 
import FlexibleTable from "@danilandreev/mui-table-flexible/dist/organizms/FlexibleTable";
```
You can learn more about the difference by [reading this guide](https://material-ui.com/guides/minimizing-bundle-size/).
## Props
| Name          | Type     | Default | Description                             |
|---------------|----------|---------|-----------------------------------------|
| button        | boolean  |         | if true, row will be clickable.         |
| onClick       | function |         | callback, called on click event.        |
| onDoubleClick | function |         | callback, called on double click event. |
| children      | node     |         | The content of element                  |


The __ref__ is forwarded to the root element.

Any other props supplied will be provided to the root element (native element).

## CSS
| Rule name      | Description                                  |
|----------------|----------------------------------------------|
| root           | Styles applied to the root element.          |
| tableContainer | Styles applied to the inner table container. |
| head           | Styles applied to the table head element.    |
| body           | Styles applied to the table body element.    |

You can override the style of the component thanks to one of these customization points:
* With a rule name of the [__classes__ object prop](https://material-ui.com/customization/components/#overriding-styles-with-classes).
* With a [global class name](https://material-ui.com/customization/components/#overriding-styles-with-global-class-names).

If that's not sufficient, you can check the [implementation of the component](https://github.com/DanilAndreev/mui-table-flexible/blob/master/src/lib/organizms/FlexibleTable/FlexibleTable.tsx) for more detail.
## Demos
* [FlexibleTable](/DanilAndreev/mui-table-flexible/wiki/FlexibleTable)