'use strict';

import React from 'react';

class TreeNode extends React.Component {
    constructor(props){
        super(props);

        let node = this.props.node;
        this.state = {expanded: this.props.node.expanded};
    }

    toggleExpanded (id, event) {
        this.setState({ expanded: !this.state.expanded });
        event.stopPropagation();
    }

    toggleSelected (id, event) {
        this.props.onSelectionChanged (id);
        event.stopPropagation();
    }

    renderChildren () {
        var node = this.props.node;
        const visible = this.state.expanded;

        if (visible) {
            let children = this.props.node.children;
            if (!Array.isArray(children)) { children = children ? [children] : []; }
            console.log ("rendering children");

            return(
                <ul>
                    {children.map((child, index) =>
                        <TreeNode
                            key={child.id}
                            level={this.props.level + 1}
                            node={child}
                            options={this.props.options}
                            visible={this.state.expanded && this.props.visible}
                        />
                    )}
                </ul>
            );
        }
    }

    render(){
        var node = this.props.node;
        console.log ("Rendering TreeNode");

        return  (
            <li onClick={this.toggleExpanded.bind(this, node.id)}>
                <label>{this.props.node.name}</label>
                {this.renderChildren()}
            </li>

        );
    }
}

TreeNode.propTypes = {
    node: React.PropTypes.object,
    onToggle: React.PropTypes.func
};

export default TreeNode;