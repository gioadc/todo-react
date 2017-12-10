var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {index, todo, onToggleTodo} = this.props;
        var className = 'list-group-item todo-item';
        if (todo.isCompleted) {
            className += ' bg-light';
        }

        var renderDate = () => {
            var dateString = todo.isCompleted ? 'Completed at ' : 'Created at ';
            var timestamp = todo.isCompleted ? todo.completedAt : todo.createdAt;
            
            return dateString + moment.unix(timestamp).format('MMM D, YY @ h:mm a')
        }
        //  else if(todo.time - moment().unix() < 24 * 60 * 60) {
        //     className += ' bg-warning';
        // } else if(todo.time - moment().unix() < 3 * 24 * 60 * 60) {
        //     className += ' bg-warning';
        // }
        return (
            <li key={index} className={className}>
                <label>
                    <input type="checkbox" onChange={(e) => onToggleTodo(todo.id)} checked={todo.isCompleted}/>{todo.title}
                    <span className="time">{renderDate()}</span>
                </label>
            </li>
        );
    }
});

module.exports = Todo;