# react-tree-view
Provides a simple re-usable tree widget

# Example

### Quick Start
```javascript
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {TreeContainer} from 'react-tree-view';

const data = {
    name: 'Inbox',
    expanded: true,
    children: [
        {
            name: 'Circles',
            expanded: true,
            children: [
                { name: 'Friends' },
                { name: 'Family' },
                { name: 'Acquantances' },
                { name: 'Following' },
                { name: 'spiritual' }
            ]
        },
        {
            name: 'Important',
            children: []
        }
      ]
  };

class DemoTree extends React.Component {
    constructor(props){
        super(props);
    }

       render(){
           return  (<TreeContainer
                    data={data}
                    highlightSelected={false}
           />);

    }
}

const content = document.getElementById('content');
ReactDOM.render(<DemoTree/>, content);
```

### Prop Values

#### data
Tree data that is used to render the tree view.

#### highlightSelected
HighLights the selected node. Note, at the moment it renders the whole tree again. This is to unselect the previously selected node in the tree. Probably there could be better ways to render just the two nodes (needs more research).

#### expandIcon/collapseIcon
Allows to change the bootstrap based glyphicon

### Data Attributes

```javascript
{
    id: '[optional] string',
    name: 'string',
    children: '[optional] array',
    expanded: '[optional] boolean'
 }
 ```
#### id
 The optional id parameter. If not provided the ids would be generated based on node count.
 
#### name
 The name of the tree node.
 
#### children
 child nodes
 
#### expanded
Denotes if the parent node should appear expanded in case it has children.

### Courtersy
This code has taken the inspiration from many packages from react-awesome-components..

