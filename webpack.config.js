module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            // TodoList: 'app/components/TodoList.jsx',
            // Todo: 'app/components/Todo.jsx',
            // AddTodo: 'app/components/AddTodo.jsx',
            // Search: 'app/components/Search.jsx',
            actions: 'app/actions/actions.jsx',
            reducers: 'app/reducers/reducers.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};