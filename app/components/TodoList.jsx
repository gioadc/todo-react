var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var {todos, onToggleTodo} = this.props;
        var renderTodoList = () => {
            
            if(todos.length == 0) {
                return (
                    <div className="alert alert-success">
                        Nothing to do!
                    </div>
                );
            }

            return todos.map((todo, index) => {
                return <Todo key={index} todo={todo} onToggleTodo={onToggleTodo} />
            });
        }

        return (
            <ul className="list-group">
                {renderTodoList()}
            </ul>
        );
    }
});

module.exports = TodoList;