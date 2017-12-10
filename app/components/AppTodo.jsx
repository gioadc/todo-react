var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var Search = require('Search');
var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');

var AppTodo = React.createClass({
    getInitialState: function(){
        return {
            todos: TodoAPI.getTodos(),
            keyword: "",
            showCompleted: false
        }
    },
    componentDidUpdate: function() {
        TodoAPI.setTodos(this.state.todos);
    },
    addTodo: function(title){

        var todo = {
            id: uuid(),
            title: title,
            createdAt: moment().unix(),
            isCompleted: false,
            completedAt: undefined
        };

        var newTodos = this.state.todos;
        newTodos.push(todo);

        this.setState({
            todos: newTodos
        });
        
    },
    onKeywordChange: function(keyword) {
        this.setState({
            keyword: keyword
        });
    },
    showCompleted: function(isShowCompleted) {
        this.setState({
            showCompleted: isShowCompleted
        });
    },
    onToggleTodo: function(id) {
        var updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
                todo.completedAt = todo.isCompleted ? moment().unix() : undefined;
            }

            return todo;
        })

        this.setState({
            todos: updatedTodos
        });
    },
    render: function(){
        var {keyword, showCompleted, todos} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, keyword);

        return (
            
            <div>
                <div className="container">
                    <div className="jumbotron text-center pt-1 pb-3">
                        <h1>Minh Tran's Todo List</h1>
                        <h6>Simple react application</h6>
                        <div className="col-md-12">
                            <hr/>
                            <AddTodo onSubmit={this.addTodo} />
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-md-12">
                            <h4>Todo List</h4>
                            <hr/>
                            <TodoList onToggleTodo={this.onToggleTodo} todos={filteredTodos} />
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container">
                        <Search onKeywordChange={this.onKeywordChange} showCompleted={this.showCompleted} />
                    </div>
                </footer>
            </div>
        );
    }
});

module.exports = AppTodo;