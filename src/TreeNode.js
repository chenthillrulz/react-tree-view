'use strict';

import React from 'react';
var classNames = require('classnames');

class TreeNode extends React.Component {
    constructor(props){
        super(props);
    }

    onClick (id, event) {
        event.stopPropagation();
        this.props.onSelectionChangedCallBack (this.props.node);
    }

    renderChildren () {
        var node = this.props.node;
        const expand = node.expanded;

        if (expand) {
            let children = this.props.node.children;
            if (!Array.isArray(children) || !children.length) {return;}
            //console.log ("rendering children");

            return(
                <ul>
                    {children.map((child, index) =>
                        <TreeNode
                            onSelectionChangedCallBack={this.props.onSelectionChangedCallBack}
                            selectedNodeId={this.props.selectedNodeId}
                            key={child.id}
                            node={child}
                            options={this.props.options}
                        />
                    )}
                </ul>
            );
        }
    }

    render(){
        var node = this.props.node;
        var options = this.props.options;
        //console.log ("Rendering TreeNode");

        // Maybe use it for syling later
        var nodeType = classNames({
            'parent-node': Array.isArray(node.children) && node.children.length != 0,
            'leaf-node': !Array.isArray(node.children) || !node.children.length,
        });

        var expandCollapseIcon = options.emptyIcon;
        if (Array.isArray(node.children) && node.children.length) {
            if (!node.expanded) {expandCollapseIcon = options.expandIcon;}
            else {expandCollapseIcon = options.collapseIcon; }
        }

        var expandCollapseIcon = <span className={expandCollapseIcon} />;

        //console.log(nodeType);
        var nodeClassNames = classNames({
            "node-label": true,
            "selected": options.highlightSelected && this.props.selectedNodeId == node.id
        });

        return  (

                <li onClick={this.onClick.bind(this, node.id)}>
                    <div className={nodeType}>
                        {expandCollapseIcon}
                        <label className={nodeClassNames}>{this.props.node.name}</label>
                    </div>
                    {this.renderChildren()}
                </li>


        );
    }
}

TreeNode.propTypes = {
    node: React.PropTypes.object,
    onSelectionChanged: React.PropTypes.func
};

export default TreeNode;