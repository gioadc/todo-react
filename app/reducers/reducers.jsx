var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return false;
    }; 
};

//showCompletedReducer, default false, TOGGLE 

export var showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return false;
           };
};

export var todoReducer = (state = [], action) => {
    switch (Action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.title,
                    createdAt: moment().unix(),
                    isCompleted: false,
                    completedAt: undefined
                };
            ];
            
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    todo.isCompleted = !todo.isCompleted;
                    todo.completedAt = todo.isCompleted ? moment().unix() : undefined;
                }
                return todo;
            });
    };
});