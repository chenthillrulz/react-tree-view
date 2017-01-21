'use strict';

export default {
    name: 'react-treebeard',
    expanded: true,
    children: [
        {
            name: 'example',
            expanded: true,
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' }
            ]
        },
        {
            name: 'node_modules',
            loading: true,
            children: []
        },
        {
            name: 'src',
            children: [
                {
                    name: 'components',
                    children: [
                        { name: 'decorators.js' },
                        { name: 'treebeard.js' }
                    ]
                },
                { name: 'index.js' }
            ]
        },
        {
            name: 'themes',
            children: [
                { name: 'animations.js' },
                { name: 'default.js' }
            ]
        },
        { name: 'Gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' }
    ]
};