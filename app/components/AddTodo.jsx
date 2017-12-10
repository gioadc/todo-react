var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        var title = this.refs.todo.value;
        
        if(title.length > 0) {
            this.props.onSubmit(title);
            this.refs.todo.value = "";
        }
    },
    render: function() {
        return (
            <div className="section">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" ref="todo" id="todo" name="todo" className="form-control" placeholder="What you want to do?" required/>
                        <span className="input-group-btn">
                            <input type="submit" value="Add" className="btn btn-success btn-block"/>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;