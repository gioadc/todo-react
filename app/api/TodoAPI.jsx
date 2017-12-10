module.exports = {
    setTodos: function(todos) {
        if(Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (error) {
            console.log('Parsing todos from localStorage fail!');
        }

        return Array.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, keyword) {
        var filteredTodos = todos;

        //filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return showCompleted || !todo.isCompleted;
        });

        //filter by keyword
        filteredTodos = filteredTodos.filter((todo) => {
            return keyword.length === 0 ||
                todo.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        });

        //sort todos with non-completed first
        filteredTodos.sort((todo1, todo2) => {
            if(!todo1.isCompleted && todo2.isCompleted)
                return -1;
            
            if(todo1.isCompleted && !todo2.isCompleted)      
                return 1;

            return 0;
        });

        return filteredTodos;
    }
};