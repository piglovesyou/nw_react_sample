const _mixins = require('./_mixins');
const React = require('react');
const {Link, State} = require('react-router');
const Actions = require('../actions');
const Store = require('../stores');
const Title = require('../components/Title');

const Index = React.createClass({

  createState() {
    let store = Store.get();
    return {
      count: store.count
    };
  },

  mixins: [_mixins],

  render() {
    return (
      <div className="app-index container">
        <Title>Index</Title>
        <p><Link to="/setting">-&gt; Setting</Link></p>
        <p><button className="btn btn-primary" onClick={this.onClick}>Clicked {this.state.count} times</button>&nbsp;</p>
      </div>
    );
  },

  onClick() {
    Actions.increment();
  }

});

module.exports = Index;
