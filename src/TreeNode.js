'use strict';

import React from 'react';
var classNames = require('classnames');

class TreeNode extends React.Component {
    constructor(props){
        super(props);

        this.state = {expanded: this.props.node.expanded};
    }

    toggleExpanded (id, event) {
        this.setState({ expanded: !this.state.expanded });
        event.stopPropagation();

        if (this.props.options.highlightSelected)
            this.props.onSelectionChangedCallBack (this.props.node);
    }

    toggleSelected (id, event) {

        event.stopPropagation();
    }

    renderChildren () {
        var node = this.props.node;
        const visible = this.state.expanded;

        if (visible) {
            let children = this.props.node.children;
            if (!Array.isArray(children)) { children = children ? [children] : []; }
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
            'parent-node': this.props.node.children && this.props.node.children.length != 0,
            'leaf-node': !this.props.node.children || this.props.node.children.length == 0,
        });

        var expandCollapseIcon = options.emptyIcon;
        if (node.children && node.children.length != 0) {
            if (!this.state.expanded) {expandCollapseIcon = options.expandIcon;}
            else {expandCollapseIcon = options.collapseIcon; }
        }

        var expandCollapseIcon = <span className={expandCollapseIcon} />;

        //console.log(nodeType);
        var nodeClassNames = classNames({
            "node-label": true,
            "selected": this.props.selectedNodeId == node.id
        });

        return  (
            <div className={nodeType}>
                <li onClick={this.toggleExpanded.bind(this, node.id)}>
                    {expandCollapseIcon}
                    <label className={nodeClassNames}>{this.props.node.name}</label>
                    {this.renderChildren()}
                </li>
            </div>

        );
    }
}

TreeNode.propTypes = {
    node: React.PropTypes.object,
    onSelectionChanged: React.PropTypes.func
};

export default TreeNode;