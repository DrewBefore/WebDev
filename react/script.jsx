import React from 'react';
var Hello = React.createClass({
    render: function() {
        return (
            <h2>Testing</h2>
        );
    }
});

React.render(<Hello/>, document.getElementById("root"));