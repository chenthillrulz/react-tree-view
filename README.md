# react-tree-view
Provides a simple re-usable tree widget

# Example
Run the demo app by
```
npm install
npm run demo
```
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

### Dev notes
The idea was to first start planning on the test framework and then move on with developing the feature. The infrastructure uses webpack for packaging the resources. It enables the hot load plugin. The configurations files are in place and would eventually use the following packages for testing
```
karma - test runner
mocha - test framework
istanbul -  test code coverage
chai - testing assertions
```
For development it uses,
```
npm - package manager. We could also use yarn eventually as well. Have been reading some good comments 
such as deterministic algorithm it uses for installing dependencies and the lock.

webpack - for bundling the resources

Extensively uses the ES6 syntax.
```
As the time which took to develop exceeded than anticipated, have not covered the testing part at the moment.

### Courtesy
This has taken the inspiration from many packages from react-awesome-components.

