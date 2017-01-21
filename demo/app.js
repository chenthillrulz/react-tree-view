'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {TreeContainer} from '../src/index';
import data from './data';

class DemoTree extends React.Component {
    constructor(props){
        super(props);
    }

       render(){
           return  (<TreeContainer
                    data={data}
           />);

    }
}

const content = document.getElementById('content');
ReactDOM.render(<DemoTree/>, content);