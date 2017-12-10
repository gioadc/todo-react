var React = require('react');

var Search = React.createClass({
    onKeywordChange: function() {
        var keyword = this.refs.keyword.value;
        this.props.onKeywordChange(keyword);
    },
    showCompleted: function() {
        var isShowCompleted = this.refs.showCompleted.checked;
        this.props.showCompleted(isShowCompleted);
    },
    render: function() {
        return (
            <div className="input-group">
                <input type="text" ref="keyword" onChange={this.onKeywordChange}  className="form-control" placeholder="Type your keyword..."/>
                <span className="input-group-addon">
                    <label className="mb-0">
                        <input type="checkbox" ref="showCompleted" value="true" onChange={this.showCompleted} /> Show completed
                    </label>
                </span>
            </div>
        );
    }
});

module.exports = Search;