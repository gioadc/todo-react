// change the searchText
export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

// Toggle show completed TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

// Add new todo ADD_TODO
export var addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        title
    };
};

// toogleTodo(id) TOGGLE_TODO
export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}