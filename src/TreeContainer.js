'use strict';

import React from 'react';
import TreeNode from './TreeNode';

class TreeContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selectedNodeId: -1};
    }

    onSelectionChanged (nodeId) {
        this.setState({selectedNodeId: nodeId});
    }

    isSelected (nodeId) {
        if (this.state.selectedNodeId == nodeId) {return true;}
        else {return false;}
    }

    setNodeIds (node) {
        if (!node.children) return;
        console.log(this.counter);

        node.children.foreach ((child, index) => {
            this.props.counter += 1;
            child.id = child.id || this.counter;
            this.setNodeIds(child);
        });
    }

    render () {
        let data = this.props.data;
        console.log("rendering tree container");

        // Support Multiple Root Nodes. Its not formally a tree, but its a use-case.
        if(!Array.isArray(data)){ data = [data]; }
        this.counter = 0;
        this.setNodeIds(data);

        return(
            <div className="treeview">
                <ul>
                    {data.map((node, index) =>
                        <TreeNode node={node}
                             Key={node.id}
                            onSelectionChanged={this.onSelectionChanged}
                            isSelected={this.isSelected(node.id)}
                            visible={true}
                            level = {1}
                            options={this.props}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

TreeContainer.defaultProps = {
    expandIcon: 'glyphicon glyphicon-plus',
    collapseIcon: 'glyphicon glyphicon-minus',
    emptyIcon: 'glyphicon',
    nodeIcon: 'glyphicon glyphicon-stop',
};

TreeContainer.propTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.Array
    ]).isRequired,
    highlightSelected: React.PropTypes.bool,
    expandIcon: React.PropTypes.string,
    collapseIcon: React.PropTypes.string,
    emptyIcon: React.PropTypes.string,
    nodeIcon: React.PropTypes.string,
}

export default TreeContainer;