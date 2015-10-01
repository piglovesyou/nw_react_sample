const React = require('react');

const Title = React.createClass({

  render() {
    return (
      <h1>
        <i className="fa fa-diamond"></i>
        &nbsp;
        {this.props.children}
      </h1>
    );
  }

});

module.exports = Title;

